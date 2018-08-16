import { initMap, handleLocationError, calculateAndDisplayRoute } from "./mapLoader";
import { showSlides } from "./slides";

let url = 'site.json';
fetch(url)
    .then(response => response.json())
    .then(data => {
        // let stuff = '';
        if (document.title != 'SiteMap') {
            if (document.title == 'Call of Duty' || document.title == 'League of Legends' || document.title == 'Super Smash Bros.' || document.title == 'Staff' || document.title == 'Content Creator' || document.title == 'Teams') {
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
            }
        }
        let navBar = document.getElementById('myNavBar')
        for (var j = 0; j < 6; j++) {
            if (j == 5) {
                var link = document.createElement('a');
                link.className = 'icon';
                link.id = 'ham';
                link.onclick = 'myFunction()';
                link.href = data.navBar.hrefs[j];
                var icon = document.createElement('i');
                icon.className = 'fa fa-bars';
                link.appendChild(icon)
                navBar.appendChild(link);
                var hamburger = document.getElementById('ham');
                hamburger.addEventListener('click', function() {
                    mySlideFunction();
                });
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

        if (document.title = 'SiteMap') {
            let div = document.getElementById('sitemap');
            for (var i = 0; i < 5; i++) {
                var link = document.createElement('a');
                link.href = data.navBar.hrefs[i] + '.html';
                link.innerText = data.navBar.names[i];
                link.appendChild(document.createElement('br'));
                if (i == 4) {
                    let holder = document.createElement('div');
                    for (var j = 0; j < 5; j++) {
                        var span = document.createElement('a');
                        span.href = data.pagination.hrefs[j] + '.html';
                        span.innerText = data.pagination.names[j];
                        holder.appendChild(span);
                        holder.appendChild(document.createElement('br'));
                    }
                    link.appendChild(holder);
                }
                div.appendChild(link);
            }
        }
    })
    .catch(e => console.log(e));

if (document.title == "Home") {
    window.onload = showSlides();
}


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