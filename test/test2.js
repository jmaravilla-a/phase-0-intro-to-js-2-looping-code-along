const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
function getJSON (url) {
fetch(url)
  .then(function(response){
    return response.json()
}
getJSON(url).then(console.log)