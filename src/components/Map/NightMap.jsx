import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './NightMap.css';

export default function NightMap() {
  useEffect(() => {
    const existingMap = document.getElementById('map');
    if (existingMap && existingMap._leaflet_id) {
      return;
    }

    const DefaultIcon = L.icon({
      iconUrl: markerIcon,
      iconRetinaUrl: markerIcon2x,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    const map = L.map('map').setView([31.4622, 74.2796], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a> contributors',
    }).addTo(map);

    L.marker([31.4622, 74.2796]).addTo(map)
      .bindPopup('Bricksol HQ')
      .openPopup();
  }, []);

  return <div id="map" className="night-map" aria-label="Dark Leaflet Map" />;
}
