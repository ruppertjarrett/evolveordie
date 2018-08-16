import { initMap, handleLocationError, calculateAndDisplayRoute } from "./mapLoader";
import { showSlides } from "./slides";

window.onload = showSlides();

let url = 'site.json';
fetch(url)
    .then(response => response.json())
    .then(data => {
        // let stuff = '';
        console.log(data);
        console.log(data.pagination.hrefs[0]);
        //data.results.forEach()
        let pagination = document.getElementById('localNav');
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
            pagination.appendChild(link)
        }
        let navBar = document.getElementById('myNavBar')
        for (var j = 0; j < 6; j++) {
            if (j == 5) {
                var link = document.createElement('a');
                link.className = 'icon';
                link.onclick = 'myFunction()';
                link.href = data.navBar.hrefs[j];
                link.innerHTML = "<i class='fa fa-bars'></i>";
                navBar.appendChild(link);
            }
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
    })
    .catch(e => console.log(e));

module.exports = {
    initMap,
    handleLocationError,
    calculateAndDisplayRoute,
    showSlides
}