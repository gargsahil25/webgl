var Light = (function() {

    var Light = function(params) {
        params = params || {};
        // this.positionX = params.positionX || 0;
        // this.positionY = params.positionY || 0;
        // this.positionZ = params.positionZ || 0;

        // this.object3D = null;

        this.init();
    };

    Light.prototype.init = function() {
        // this.object3D = new THREE.PointLight(0xFFFFFF, 2, 100, 1);
        // this.object3D.position.set(this.positionX, this.positionY, this.positionZ);
        // this.object3D.castShadow = true;
    };

    Light.prototype.update = function(time) {};

    return Light;

})();