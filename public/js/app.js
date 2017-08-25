var App = (function() {

    var App = function(params) {
        params = params || {};
        this.container = params.container;
        this.enableVR = params.enableVR;
        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.objects = [];
        this.object3DContainer = null;
        this.animating = false;
        this.time = 0;
        this.orbit = null;
        this.gyroController = null;
        this.raycaster = null;

        this.init();
    };

    App.prototype.addObject = function(object) {
        this.objects.push(object);
        this.object3DContainer.add(object.object3D);
    };

    App.prototype.init = function() {
        /* Init renderer */
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.container.appendChild(this.renderer.domElement);

        if (this.enableVR) {
            this.vrRenderer = new THREE.StereoEffect(this.renderer);
            this.vrRenderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        }

        /* Create a new Three.js scene */
        this.scene = new THREE.Scene();

        /* Put in a camera */
        this.camera = new Camera({
            positionX: -0.1,
            positionY: 0,
            positionZ: 10,
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
        });
        this.scene.add(this.camera.object3D);

        /* Initialise object container */
        this.object3DContainer = new THREE.Object3D();

        /* Add star field in the scene */
        var starGeometry = new THREE.SphereGeometry(80, 32, 32);
        var starMaterial = new THREE.MeshPhongMaterial({
            map: new THREE.ImageUtils.loadTexture("./images/star.jpg"),
            side: THREE.BackSide,
            transparent: true,
            opacity: 0.7
        });
        starField = new THREE.Mesh(starGeometry, starMaterial);
        this.scene.add(starField);

        /* Add orbit controls */
        this.orbit = new THREE.OrbitControls(this.camera.object3D, this.renderer.domElement);
        this.gyroController = new THREE.DeviceOrientationControls(this.camera.object3D);

        /* Add some light to see the scene */
        // this.scene.add(new THREE.AmbientLight(0xFFFFFF));

        /* Init raycaster */
        this.raycaster = new THREE.Raycaster();
        for (var i in this.objects) {
            this.object3Ds.add(this.objects[i].object3D);
        }

        /* Add axis helper */
        // this.scene.add(new THREE.AxisHelper(1000));
    };

    App.prototype.run = function() {
        /* Add objects in the scene */
        this.scene.add(this.object3DContainer);

        /* Render the scene */
        var render = function() {
            starField.rotation.y -= 0.0005;
            // Render the scene
            if (this.enableVR) {
                this.vrRenderer.render(this.scene, this.camera.object3D);
            } else {
                this.renderer.render(this.scene, this.camera.object3D);
            }

            if (this.animating) {
                for (var i in this.objects) {
                    this.objects[i].update(this.time);
                }
                this.time++;
                this.camera.update(this.time);
            }

            if (this.enableVR) {
                this.gyroController.update();
            } else {
                this.orbit.update();
            }

            // Ask for another frame
            requestAnimationFrame(render.bind(this));
        };

        render.call(this);
    };

    App.prototype.toogleAnimation = function() {
        this.animating = !this.animating;
        if (this.animating) {
            document.getElementsByTagName("html")[0].webkitRequestFullscreen();
        } else {
            document.webkitExitFullscreen();
        }
    };

    App.prototype.getObjectName = function(clientX, clientY) {
        var mouse = new THREE.Vector2();
        mouse.x = (clientX / this.container.offsetWidth) * 2 - 1;
        mouse.y = -(clientY / this.container.offsetHeight) * 2 + 1;
        this.raycaster.setFromCamera(mouse, this.camera.object3D);
        var intersect = this.raycaster.intersectObjects(this.object3DContainer.children, true);
        if (intersect.length > 0) {
            return intersect[0].object.name;
        }
        return;
    };

    App.prototype.resize = function() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        if (this.vrRenderer) {
            this.vrRenderer.setSize(window.innerWidth, window.innerHeight);
        }
    };

    return App;
})();