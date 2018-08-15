var map, infoWindow;

function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.644188,
            lng: -111.952249
        },
        zoom: 12
    });
    infoWindow = new google.maps.InfoWindow;

    directionsDisplay.setMap(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
    
            infoWindow.setPosition(pos);
            map.setCenter(pos);
            calculateAndDisplayRoute(directionsService, directionsDisplay, pos.lat, pos.lng);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, lat, lng) {
    directionsService.route({
        origin: new google.maps.LatLng({
            lat: lat,
            lng:lng
        }),
        destination: {
            lat: 40.7618,
            lng: -111.8762
        },
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

export {
    initMap,
    handleLocationError,
    calculateAndDisplayRoute
};