/* Location display */

function initGeo(){
navigator.geolocation.getCurrentPosition(pos=>{
document.getElementById("geo").textContent=
"Lat "+pos.coords.latitude.toFixed(2);
});
}
