import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

function App() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      // style: 'mapbox://styles/mapbox/streets-v11',
      center: [-121.478851, 38.575764], // Sacramento, CA
      zoom: 13,
      config: {
        basemap: { theme: 'faded' },
      },
    });
    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <div className="flex absolute top-0 left-0 right-0 bottom-0 h-full w-full">
      {/* Sidebar placeholder */}
      <div className="w-1/4 p-4 bg-sg-light-green">
        <h2 className="text-sg-green text-xl font-bold">Stores nearby:</h2>
      </div>

      {/* Map container */}
      <div className="w-3/4">
        <div className="h-full w-full" ref={mapContainerRef} />
      </div>
    </div>
  );
}

export default App;
