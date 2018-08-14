var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.644188,
            lng: -111.952249
        },
        zoom: 11
    });
}

export {
    initMap
};