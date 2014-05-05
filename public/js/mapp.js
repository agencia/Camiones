
var map;
function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(21.8890872,-102.2919885)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
      
//  var marker = new google.maps.Marker({
//    position: map.getCenter(),
//    map: map,
//    title: 'Click to zoom'
//  });

  var busStopIco = site_url+"/img/busstopblue64.png";
//var myLatLng = new google.maps.LatLng(-33.890542, 151.274856);
  var beachMarker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      icon: busStopIco
  });
  
  google.maps.event.addListener(map, 'center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(beachMarker.getPosition());
    }, 3000);
  });

  google.maps.event.addListener(beachMarker, 'click', function() {
    map.setZoom(18);
    map.setCenter(beachMarker.getPosition());
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
