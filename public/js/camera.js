var Camera = (function() {

    var Camera = function(params) {
        params = params || {};
        this.init();
    };

    Camera.prototype.init = function() {};

    Camera.prototype.update = function(time) {};

    return Camera;

})();