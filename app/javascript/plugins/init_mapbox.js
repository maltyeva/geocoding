import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
};

const initMapbox = () => {
	const mapElement = document.getElementById('map');
  if (mapElement) {
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const markers = JSON.parse(mapElement.dataset.markers)

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/maltyeva/ckaypgs2n0wu51jpfb4rgjfdb'
    });
    markers.forEach((marker) => {
      // create custom icon 
     const element = document.createElement('div');
     element.className = 'marker';
     element.style.backgroundImage = `url('${marker.image_url}')`;
     element.style.backgroundSize = 'contain';
     element.style.width = '25px';
     element.style.height = '25px';
     // create info window
     const popup = new mapboxgl.Popup().setHTML(marker.infoWindow);
     new mapboxgl.Marker(element)
     .setLngLat([ marker.lng, marker.lat ])
     .setPopup(popup)
     .addTo(map);
   });
    fitMapToMarkers(map, markers);
    map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken, mapboxgl: mapboxgl }));
  }

}

export { initMapbox }