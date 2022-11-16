/*fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=rain"
)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
*/
async function getRain(position) {
    console.log(position);

    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&daily=precipitation_sum&timezone=auto`
    );
    const data = await response.json();

    console.log(data);
    addEventListener('click', (event) => {
        if (data.daily.precipitation_sum[1] > 0) {
            // rain, do stuff
            window.location.replace("out.html");
        } else {
            // no rain, do stuff
            window.location.replace("in.html");
        }
    });
}




function getlocation() {
    // promt for user location and pass positon to getRain-function
    navigator.geolocation.getCurrentPosition(getRain);
}

// call function to get browser location
getlocation();