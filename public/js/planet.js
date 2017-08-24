var Planet = (function() {

    var Planet = function(params) {
        params = params || {};
        // this.name = params.name || "No Name";
        // this.positionX = params.positionX || 0;
        // this.positionY = params.positionY || 0;
        // this.positionZ = params.positionZ || 0;
        // this.rotationY = params.rotationY || 0;
        // this.imagePath = params.imagePath || "./images/earth.jpg";
        // this.speed = params.speed || 0.001;
        // this.tilt = params.tilt || 0;
        // this.size = params.size || 1;
        // this.centerDistance = params.centerDistance || 3;
        // this.centerObject = params.centerObject;
        // this.useShader = params.useShader || false;
        // this.normalImagePath = params.normalImagePath || "./images/earth-normal.png";
        // this.specularImagePath = params.specularImagePath || "./images/earth-specular.jpg";
        // this.showClouds = params.showClouds || false;
        // this.cloudImagePath = params.cloudImagePath || "./images/earth-clouds.png";
        // this.receiveShadow = params.receiveShadow || false;
        // this.castShadow = params.castShadow || false;

        // this.mesh = null;
        // this.clouds = null;
        // this.object3D = null;

        this.init();
    };

    Planet.prototype.init = function() {
        // var geometry = new THREE.SphereGeometry(this.size, 32, 32);
        // var textureLoader = new THREE.TextureLoader();
        // var texture = textureLoader.load(this.imagePath);
        // var obj = {
        //     map: texture
        // };

        // if (this.useShader) {
        //     var normalMap = textureLoader.load(this.normalImagePath);
        //     var specularMap = textureLoader.load(this.specularImagePath);
        //     obj.normalMap = normalMap;
        //     obj.specularMap = specularMap;
        // }

        // var material = new THREE.MeshPhongMaterial(obj);
        // this.mesh = new THREE.Mesh(geometry, material);
        // this.mesh.name = this.name;
        // this.mesh.position.set(this.positionX, this.positionY, this.positionZ);
        // this.mesh.rotation.z = this.tilt;
        // this.mesh.castShadow = this.castShadow;
        // this.mesh.receiveShadow = this.receiveShadow;

        // this.object3D = new THREE.Object3D();
        // this.object3D.add(this.mesh);

        // if (this.showClouds) {
        //     this.object3D.add(getCloudsMesh(this));
        // }
    };

    Planet.prototype.update = function(time) {
        // if (this.mesh) {
        //     this.mesh.rotation.y += this.rotationY;
        //     if (this.centerObject) {
        //         this.mesh.position.x = this.centerDistance * Math.sin(this.speed * time) + this.centerObject.position.x;
        //         this.mesh.position.z = this.centerDistance * Math.cos(this.speed * time) + this.centerObject.position.z;
        //     }
        // }

        // if (this.clouds) {
        //     this.clouds.rotation.y += this.rotationY * 0.8;
        //     if (this.centerObject) {
        //         this.clouds.position.x = this.centerDistance * Math.sin(this.speed * time) + this.centerObject.position.x;
        //         this.clouds.position.z = this.centerDistance * Math.cos(this.speed * time) + this.centerObject.position.z;
        //     }
        // }
    };

    // function getCloudsMesh(that) {
    //     var geometry = new THREE.SphereGeometry(that.size * 1.005, 32, 32);
    //     var textureLoader = new THREE.TextureLoader();
    //     var cloudsMap = textureLoader.load(that.cloudImagePath);
    //     var material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: cloudsMap, transparent: true });
    //     that.clouds = new THREE.Mesh(geometry, material);
    //     that.clouds.name = that.name;

    //     that.clouds.position.set(that.positionX, that.positionY, that.positionZ);
    //     that.clouds.rotation.z = that.tilt;
    //     return that.clouds;
    // }

    return Planet;

})();