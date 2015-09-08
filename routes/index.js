/*
 * The right place to put this simple "model" would be in a separate model file in 
 * the models directory.  I put it here for simplicity of this example.
 */

var trees = [
	{	name : 'Oak',
		content: 'Oak trees grow very tall.  And produce acorns.'},
	{	name: 'Maple',
		content: 'The leaf of the maple tree is the symbol of Canada.  Maple trees make great pancake syrup.'},
	{	name: 'Black Cherry',
		content: 'Black Cheery trees produce a lot of cherries.  They are a nuisance to have in your yard.'},
	{ name: 'Weeping willow',
		content: 'Weeping willows have long draping branches and thrive near water.'}
	]
	
/*
 * The res.render method takes two arguments
 *   1) The name of the view being rendered.  This would be a file in the view
 *      directory, minus the .ejs file extension. So in the example below, the
 *      'index' refers to the file ../views/index.ejs
 *   2) An object to be passed to the view.  In this case it is an object with
 *      two attributes and values.  The value of the second attribute, 'trees',
 *      is an array of objects (defined above).  So the object passed to the view
 *      can be as complex as is necessary, determined by what the view needs
 *      to include in the response to the client. 
 */
exports.index = function(req, res){
  res.render('index', { 'title': 'Trees', 'trees': trees});
};

// $(document).ready(function(){
// 	$(document).on( "pageinit", "#map-page", function() {
// 	    var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);  // Default to Hollywood, CA when no geolocation support
// 	    if ( navigator.geolocation ) {
// 	        function success(pos) {
// 	            // Location found, show map with these coordinates
// 	            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
// 	        }
// 	        function fail(error) {
// 	            drawMap(defaultLatLng);  // Failed to find location, show default map
// 	        }
// 	        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
// 	        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
// 	    } else {
// 	        drawMap(defaultLatLng);  // No geolocation support, show default map
// 	    }
// 	    function drawMap(latlng) {
// 	        var myOptions = {
// 	            zoom: 10,
// 	            center: latlng,
// 	            mapTypeId: google.maps.MapTypeId.ROADMAP
// 	        };
// 	        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
// 	        // Add an overlay to the map of current lat/lng
// 	        var marker = new google.maps.Marker({
// 	            position: latlng,
// 	            map: map,
// 	            title: "Greetings!"
// 	        });
//     	}
// 	});
// });
