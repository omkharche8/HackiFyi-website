import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Leaflet = () => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const mapRef = useRef(null); // Reference to the Leaflet map
  const mapContainerRef = useRef(null); // Reference to the map container element

  // Define the extent to match your images (adjust these values based on your image extent)
  const bounds = [[5.0, 60.0], [40.0, 100.0]]; // [southWest, northEast]

  // Correct the image paths
  const frames = Array.from({ length: 50 }, (_, index) => `images/generated_image_${index + 1}.png`);

  useEffect(() => {
    // Initialize the Leaflet map if not already initialized
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([20, 80], 5); // Center and zoom level

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      console.log('Map initialized');
    }
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (map && frames.length > 0) {
      let imageOverlay;

      const updateFrameLayer = (frameUrl) => {
        console.log('Updating frame layer with URL:', frameUrl); // Debugging log
        if (imageOverlay) {
          map.removeLayer(imageOverlay); // Remove previous image overlay
          console.log('Removed previous image overlay');
        }

        imageOverlay = L.imageOverlay(frameUrl, bounds, {
          opacity: 0.8, // Set opacity for better visibility
        }).addTo(map);

        console.log('Added new image overlay');
      };

      // Automatically cycle through frames at 60 fps (every 17ms)
      const interval = setInterval(() => {
        // Update the frame index
        setCurrentFrameIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % frames.length;
          updateFrameLayer(frames[nextIndex]);
          return nextIndex;
        });
      }, 100); // Set to 100ms for smoother transitions (adjust as needed)

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [frames]);

  return (
    <div id="map-container" style={{ position: 'relative', width: '100%', height: '100vh' }} ref={mapContainerRef}></div>
  );
};

export default Leaflet;