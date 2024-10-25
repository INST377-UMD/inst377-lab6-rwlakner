function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

function createMap(){
    var map = L.map('map').setView([51.505, -0.09], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    createSet();
}

function createSet() {
    for (let i = 1; i < 4; i++) {

        let lat = getRandomInRange(30, 35, 3);
        let long = getRandomInRange(-90, -100, 3);

        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
        .then((resp) => resp.json())
        .then((data) => {
            document.getElementById(`locality${i}`).innerHTML += data.locality;
        })

        document.getElementById(`marker${i}`).innerHTML += "Latitude: " + lat + ", Longitude: " + long;
      }
}

window.onload = createMap;
