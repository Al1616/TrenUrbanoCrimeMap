console.log("Hello, world!")
// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWwxNjE2IiwiYSI6ImNqc200ZXQ0YTBnOWE0NG54Ym45YnYybHgifQ.t9lM7oOjsxtKmQS_BGfbdg'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/al1616/cjv8d129i3wjd1ftazkl7tmr7',
    center: [-66.09922,18.41292], 
    zoom: 13
})

// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})

map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

    // create new variables to store the attributes we're interested in from the event
    let lng = event.coords.longitude
    let lat = event.coords.latitude

    // debug
    console.log('geolocated:', lng, lat)

    // format lng lat values and display them on our 'info' element
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})

map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})

let data = [
    {
        location: [-66.15379,18.40043],
        content: 'Bayamón'
    },
    {
        location: [-66.14928,18.39428],
        content: 'Deportivo'
    },
    {
        location: [-66.12835,18.39410],
        content: 'Jardines'
    },
    {
        location: [-66.11944,18.39193],
        content: 'Torrimar'
    },
    {
        location: [-66.10158,18.39113],
        content: 'Martínez Nadal'
    },
    {
        location: [-66.09400,18.39079],
        content: 'Las Lomas'
    },
    {
        location: [-66.08293,18.39077],
        content: 'San Francisco'
    },
    {
        location: [-66.07498,18.39148],
        content: 'Centro Médico'
    },
    {
        location: [-66.06325,18.39036],
        content: 'Cupey'
    },
    {
        location: [-66.05217,18.39960],
        content: 'Río Piedras'
    },
    {
        location: [-66.05172,18.40584],
        content: 'Universidad'
    },
    {
        location: [-66.05537,18.41096],
        content: 'Piñero'
    },
    {
        location: [-66.05639,18.41513],
        content: 'Domenech'
    },
    {
        location: [-66.05887,18.42338],
        content: 'Roosevelt'
    },
    {
        location: [-66.06019,18.42932],
        content: 'Hato Rey'
    },
    {
        location: [-66.06044,18.43638],
        content: 'Sagrado Corazón'
    },
    ]
    data.forEach(function(d) {

    let marker = new mapboxgl.Marker()    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})

