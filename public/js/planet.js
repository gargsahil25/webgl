var Planet = (function() {

    var Planet = function(params) {
        params = params || {};
        this.init();
    };

    Planet.prototype.init = function() {};

    Planet.prototype.update = function(time) {};

    return Planet;

})();