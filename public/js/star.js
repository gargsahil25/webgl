var Star = (function() {

    var Star = function(params) {
        params = params || {};
        this.name = params.name || "No Name";
        this.positionX = params.positionX || 0;
        this.positionY = params.positionY || 0;
        this.positionZ = params.positionZ || 0;
        this.rotationY = params.rotationY || 0;
        this.imagePath = params.imagePath || "./images/sun.jpg";
        this.size = params.size || 1;

        this.mesh = null;
        this.light = null;
        this.object3D = null;

        this.init();
    };

    Star.prototype.init = function() {
        var geometry = new THREE.SphereGeometry(this.size, 32, 32);
        var textureLoader = new THREE.TextureLoader();
        var texture = textureLoader.load(this.imagePath);
        var material = new THREE.MeshPhongMaterial({ map: texture, emissive: "#ffffff", emissiveMap: texture });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.name = this.name;
        this.mesh.position.set(this.positionX, this.positionY, this.positionZ);

        this.light = new Light({ positionX: this.positionX, positionY: this.positionY, positionZ: this.positionZ });

        this.object3D = new THREE.Object3D();
        this.object3D.add(this.mesh);
        this.object3D.add(this.light.object3D);
    };

    Star.prototype.update = function(time) {
        this.mesh.rotation.y += this.rotationY;
        this.light.update();
    };

    return Star;

})();