var myLibrary =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mapLoader = __webpack_require__(1);

var _slides = __webpack_require__(2);

var url = 'site.json';
fetch(url).then(function (response) {
    return response.json();
}).then(function (data) {
    // let stuff = '';
    if (document.title != 'SiteMap') {
        if (document.title == 'Call of Duty' || document.title == 'League of Legends' || document.title == 'Super Smash Bros.' || document.title == 'Staff' || document.title == 'Content Creator' || document.title == 'Teams') {
            console.log(data);
            console.log(data.pagination.hrefs[0]);
            //data.results.forEach()
            var pagination = document.getElementById('localNav');
            for (var i = 0; i < 5; i++) {
                var link = document.createElement('a');
                link.href = data.pagination.hrefs[i] + '.html';
                link.className = 'tooltip';
                var img = document.createElement('img');
                img.className = 'pagLogo';
                img.src = 'images/gamelogos/' + data.pagination.hrefs[i] + '.png';
                link.appendChild(img);
                var span = document.createElement('span');
                span.className = 'tooltiptext';
                span.innerText = data.pagination.names[i];
                link.appendChild(span);
                pagination.appendChild(link);
            }
        }
        var navBar = document.getElementById('myNavBar');
        for (var j = 0; j < 6; j++) {
            if (j == 5) {
                var link = document.createElement('a');
                link.className = 'icon';
                link.id = 'ham';
                link.onclick = 'myFunction()';
                link.href = data.navBar.hrefs[j];
                var icon = document.createElement('i');
                icon.className = 'fa fa-bars';
                link.appendChild(icon);
                navBar.appendChild(link);
                var hamburger = document.getElementById('ham');
                hamburger.addEventListener('click', function () {
                    mySlideFunction();
                });
            } else {

                if (j == 0) {
                    var link = document.createElement('a');
                    link.className = 'logo';
                    var img = document.createElement('img');
                    img.src = data.navBar.img;
                    link.appendChild(img);
                    navBar.appendChild(link);
                }
                var link = document.createElement('a');
                link.href = data.navBar.hrefs[j] + '.html';
                link.innerText = data.navBar.names[j];
                navBar.appendChild(link);
            }
        }
    } else {
        var div = document.getElementById('sitemap');
        for (var i = 0; i < 5; i++) {
            var link = document.createElement('a');
            link.href = data.navBar.hrefs[i] + '.html';
            link.innerText = data.navBar.names[i];
            if (i == 4) {
                var holder = document.createElement('div');
                for (var j = 0; j < 5; j++) {
                    var span = document.createElement('a');
                    span.href = data.pagination.hrefs[j] + '.html';
                    span.innerText = data.pagination.names[j];
                    holder.appendChild(span);
                }
                link.appendChild(holder);
            }
            div.appendChild(link);
        }
    }
}).catch(function (e) {
    return console.log(e);
});

if (document.title == "Home") {
    window.onload = (0, _slides.showSlides)();
}

var mySlideFunction = function mySlideFunction(evt) {
    var x = document.getElementById("myNavBar");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
};

module.exports = {
    initMap: _mapLoader.initMap,
    handleLocationError: _mapLoader.handleLocationError,
    calculateAndDisplayRoute: _mapLoader.calculateAndDisplayRoute,
    showSlides: _slides.showSlides
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var map, infoWindow;

var initMap = function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.644188,
            lng: -111.952249
        },
        zoom: 12
    });
    infoWindow = new google.maps.InfoWindow();

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
};

var handleLocationError = function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};

var calculateAndDisplayRoute = function calculateAndDisplayRoute(directionsService, directionsDisplay, lat, lng) {
    directionsService.route({
        origin: new google.maps.LatLng({
            lat: lat,
            lng: lng
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
};

exports.initMap = initMap;
exports.handleLocationError = handleLocationError;
exports.calculateAndDisplayRoute = calculateAndDisplayRoute;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var slideIndex = 0;

var showSlides = function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
};

exports.showSlides = showSlides;

/***/ })
/******/ ]);