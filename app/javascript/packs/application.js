require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import 'mapbox-gl/dist/mapbox-gl.css'; 
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


import { initMapbox } from '../plugins/init_mapbox';
import { initAutocomplete } from '../plugins/init_autocomplete';
initMapbox();
initAutocomplete();

// import 'mapbox';
