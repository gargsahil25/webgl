/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author arodic / http://aleksandarrodic.com/
 * @author fonserbc / http://fonserbc.github.io/
 * @author debojyoti / http://www.debojyotighosh.com/
*/

THREE.StereoEffect = function ( renderer ) {

	var _stereo = new THREE.StereoCamera();
	_stereo.aspect = 0.5;
	_stereo.cameraR.layers.enable(1); // Change - Changed by Raghav in order to make sure both camera's see same scenes

	// Initialize raycaster
	var _raycaster = new THREE.Raycaster();

	// Initialize pointer (target of ray)
	var _pointer = new THREE.Vector2();
	_pointer.x = 0;
	_pointer.y = 0;

	this.setEyeSeparation = function ( eyeSep ) {

		_stereo.eyeSep = eyeSep;

	};

	this.setSize = function ( width, height ) {

		renderer.setSize( width, height );

	};

	this.render = function ( scene, camera ) {

		scene.updateMatrixWorld();

		if ( camera.parent === null ) camera.updateMatrixWorld();

		_stereo.update( camera );

		var size = renderer.getSize();

		if ( renderer.autoClear ) renderer.clear();
		renderer.setScissorTest( true );

		renderer.setScissor( 0, 0, size.width / 2, size.height );
		renderer.setViewport( 0, 0, size.width / 2, size.height );
		renderer.render( scene, _stereo.cameraL );

		renderer.setScissor( size.width / 2, 0, size.width / 2, size.height );
		renderer.setViewport( size.width / 2, 0, size.width / 2, size.height );
		renderer.render( scene, _stereo.cameraR );

		renderer.setScissorTest( false );

	};

	// Check for THREE JS raycaster intersections with Object3D container ('objContainer')
	// If intersection occurs, return intersected object details
	// Added by Debojyoti
	this.checkIntersections = function ( objContainer ) {

		_raycaster.setFromCamera( _pointer, _stereo.cameraR );

		var intersects = _raycaster.intersectObjects( objContainer.children, true );

		// intersects[0] stores the nearest object
        if ( intersects.length > 0 && intersects[0].object.visible === true ) {
			// return success value along with intersected object
			return {
				sts: true,
				obj: intersects[0]
			};
        }
        else {
			return {
				sts: false,
				obj: null
			};
        }

		// TODO: Send only 'intersects[0]' in return value

	}

};
