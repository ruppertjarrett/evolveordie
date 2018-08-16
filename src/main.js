import { initMap, handleLocationError, calculateAndDisplayRoute } from "./mapLoader";
import { showSlides } from "./slides";

window.onload = showSlides();


var hamburger = document.getElementById('ham');
hamburger.addEventListener('click', function() {
    mySlideFunction();
});

const mySlideFunction = evt => {
    var x = document.getElementById("myNavBar");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}

module.exports = {
    initMap,
    handleLocationError,
    calculateAndDisplayRoute,
    showSlides
}