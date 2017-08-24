var app = null;
var objectName = null;
var container = null;

function onLoad() {
    objectName = document.getElementById("name");
    container = document.getElementById("container");

    // Create new app
    app = new App({});

    /* Init objects in app */
    
    /* Add objects in app */

    // Add a mouse up handler to toggle the animation
    addMouseHandler();

    // Run the app
    app.run();
}

function addMouseHandler() {}

function onMouseUp(event) {}

function onMouseMove(event) {}