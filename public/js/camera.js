var Camera = (function() {

    var Camera = function(params) {
        params = params || {};
        // this.positionX = params.positionX || 0;
        // this.positionY = params.positionY || 0;
        // this.positionZ = params.positionZ || 0;
        // this.width = params.width || 1;
        // this.height = params.height || 1;
        // this.speed = 0.001;

        // this.object3D = null;
        this.init();
    };

    Camera.prototype.init = function() {
        // this.object3D = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 100000);
        // this.object3D.position.set(this.positionX, this.positionY, this.positionZ);
    };

    Camera.prototype.update = function(time) {
        // if (time < 200) {
        //     this.object3D.position.z += this.speed * time;
        // } else if (time < 400) {
        //     this.object3D.position.z -= this.speed * (time - 200);
        // }
    };

    return Camera;

})();