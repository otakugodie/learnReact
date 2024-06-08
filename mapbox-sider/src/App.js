import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Sidebar from './Sidebar';
import './App.css';

 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGllZ29mZXJyb2RyaWd1ZXpjIiwiYSI6ImNsaHl4eHNzMDE4cXAzb3FhcjE3bjljaGcifQ.ax8RcNUrHQD360B73A-7Ug';
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('findStation');

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-9.22);
  const [lat, setLat] = useState(38.69);
  const [zoom, setZoom] = useState(13); 

  useEffect(() => {    
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true, // Solicitar alta precisión
        timeout: 10000, // Establecer tiempo máximo de espera en milisegundos
      };


      navigator.geolocation.getCurrentPosition(position => {
        setLng(position.coords.longitude);
        setLat(position.coords.latitude);

        // Agregar un marcador en la ubicación del usuario
        const marker = new mapboxgl.Marker()
        .setLngLat([position.coords.longitude, position.coords.latitude])
        .addTo(map.current);
      },
      error => {
        console.error('Error al obtener la ubicación:', error);
      },
      options

      );
    }

    
    
    
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    }, [lng, lat, zoom] );

    

  return (

    <div className="app">      
      <Sidebar 
        isOpen={isSidebarOpen}
        activeTab={activeTab}
        onTabClick={setActiveTab}        
      />
      <div>
        <div className="sidebarPos">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>        
      </div>

      <div ref={mapContainer} className="map-container">
        <button
          className="toggle-button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
      </div>
    </div>



  );
};

export default App;