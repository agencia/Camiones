<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
      html, body, #map-canvas {
        height: 100%;
        margin: 0px;
        padding: 0px
      }
    </style>
  </head>
  <body>
      <div>
          <button>Agregar Marcador</button>
      </div>
    <div id="map-canvas"></div>
    <script type="text/javascript" src="js/conf.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script type="text/javascript" src="js/mapp.js"></script>
    <script src="js/lib/jquery-2.1.1.min.js" type="text/javascript"></script>
    <script src="js/lib/json2.js" type="text/javascript"></script>
    <script src="js/lib/underscore-min.js" type="text/javascript"></script>
    <script src="js/lib/backbone-min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/app.js"></script>
  </body>
</html>