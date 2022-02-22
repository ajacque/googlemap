// Initialize and add the map
function initMap() {
  // The location of options
  const options = { lat:42.3601, lng: -71.0589};
  // The map, centered at options
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: options,
  });
  // The marker, positioned at options
  const marker = new google.maps.Marker({
    position: options,
    map: map,
  });
}
