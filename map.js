<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title>Swipe between maps</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.54.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.54.0/mapbox-gl.css' rel='stylesheet' />
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
    </style>
</head>
<body>
    

<style>
body {
    overflow: hidden;
}

body * {
   -webkit-touch-callout: none;
     -webkit-user-select: none;
        -moz-user-select: none;
         -ms-user-select: none;
             user-select: none;
}

.map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
</style>
<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.1.0/mapbox-gl-compare.js'></script>
<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.1.0/mapbox-gl-compare.css' type='text/css' />

<div id='before' class='map'></div>
<div id='after' class='map'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiYWwxNjE2IiwiYSI6ImNqc200ZXQ0YTBnOWE0NG54Ym45YnYybHgifQ.t9lM7oOjsxtKmQS_BGfbdg';
var beforeMap = new mapboxgl.Map({
    container: 'before',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [0, 0],
    zoom: 0
});

var afterMap = new mapboxgl.Map({
    container: 'after',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [0, 0],
    zoom: 0
});

var map = new mapboxgl.Compare(beforeMap, afterMap, {
    // Set this to enable comparing two maps by mouse movement:
    // mousemove: true
});
</script>

</body>
</html>