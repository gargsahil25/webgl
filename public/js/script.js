var app = null;
var objectName = null;
var container = null;

function onLoad() {
    objectName = document.getElementById("name");
    container = document.getElementById("container");

    // Create new app
    app = new App({
        // container: container,
        // enableVR: true
    });

    /* Init objects in app */
    // var sun = new Star({
    //     name: "Sun",
    //     positionX: 0,
    //     positionZ: 0,
    //     rotationY: 0.0025
    // });
    // var earth = new Planet({
    //     name: "Earth",
    //     positionX: 0,
    //     positionZ: 5,
    //     rotationY: 0.05,
    //     size: 0.5,
    //     tilt: 0.41,
    //     speed: 0.01,
    //     centerDistance: 5,
    //     centerObject: sun.mesh,
    //     useShader: true,
    //     showClouds: true,
    //     receiveShadow: true
    // });
    // var moon = new Planet({
    //     name: "Moon",
    //     positionX: 0,
    //     positionZ: 6,
    //     rotationY: 0.05,
    //     size: 0.2,
    //     speed: 0.05,
    //     centerDistance: 1,
    //     imagePath: "./images/moon.jpg",
    //     centerObject: earth.mesh,
    //     castShadow: true
    // });
    // var jupitor = new Planet({
    //     name: "Jupitor",
    //     positionX: 0,
    //     positionZ: 7,
    //     rotationY: 0.05,
    //     size: 0.7,
    //     speed: 0.005,
    //     centerDistance: 7,
    //     imagePath: "./images/jupiter.jpg",
    //     centerObject: sun.mesh
    // });
    
    /* Add objects in app */
    // app.addObject(sun);
    // app.addObject(earth);
    // app.addObject(moon);
    // app.addObject(jupitor);

    // Add a mouse up handler to toggle the animation
    addMouseHandler();

    // Run the app
    app.run();
}

function addMouseHandler() {
    // container.addEventListener('mouseup', onMouseUp, false);
    // container.addEventListener('mousemove', onMouseMove, false);
    // window.addEventListener('resize', app.resize.bind(app));
}

function onMouseUp(event) {
    // app.toogleAnimation();
}

function onMouseMove(event) {
    // objectName.innerHTML = (app.getObjectName(event.clientX, event.clientY) || "Welcome to Universe");
}