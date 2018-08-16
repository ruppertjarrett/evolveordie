import { initMap, handleLocationError, calculateAndDisplayRoute } from "./mapLoader";
import { showSlides } from "./slides";

window.onload = showSlides();

module.exports = {
    initMap,
    handleLocationError,
    calculateAndDisplayRoute,
    showSlides
}