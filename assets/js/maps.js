function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), { // The familiar document.GetElementByID() method is used to retrieve the div with the ID of "map" of line 110 / google.maps.Map is provided by the Google Maps API.
        zoom: 3, // The zoom parameter is the initial zoom on the map.
        center: { // To set the central coordinates, which is where the map initially displays.
            lat: 52.366839,
            lng: 4.891360
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Labels is a pretty standard var to use for makers.

    var locations = [
        { lat: 52.074314, lng: 5.100695 },
        { lat: 52.377068, lng: 4.918394 }
    ];

    var markers = locations.map(function(location, i) { // This is needed to iterate through the array and create a new marker that has the label from our string. This is a JS- method, NOT a Google Map one.
        // The .map method can take up to 3 arguments in it's function; 'location' is the current value of where we are in the array as we're looping through, 'i' is the index number of where we currently are in the array.
        return new google.maps.Marker({ // This is going to have a (below) position value which is going to be set to the current location, and a label which is going to be set to i % labels.length.
            position: location, // Certain methods that work with arrays in JS also work with strings. And here we want to get one of our labels out of the string that we've created.
            label: labels[i % labels.length] // The reason for using % operator is so that if there are more than 26 locations, it will loop back to the start of the string and go from Z back to A, instead of showing an error.
        });

    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}