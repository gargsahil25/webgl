var Camera = (function() {

    var Camera = function(params) {
        params = params || {};
        this.positionX = params.positionX || 0;
        this.positionY = params.positionY || 0;
        this.positionZ = params.positionZ || 0;
        this.width = params.width || 1;
        this.height = params.height || 1;

        this.object3D = null;
        this.init();
    };

    Camera.prototype.init = function() {
        this.object3D = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 100000);
        this.object3D.position.set(this.positionX, this.positionY, this.positionZ);
    };

    Camera.prototype.update = function(time) {};

    return Camera;

})();