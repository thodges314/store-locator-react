import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';

import { storeLocations } from './assets/locations';
import Marker from './Marker';
import Sidebar from './Sidebar';

import type { StoreFeature } from './assets/locations';

function App() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [stores] = useState<StoreFeature[]>(storeLocations);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedStore, setSelectedStore] = useState<StoreFeature | null>(null);

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

    mapRef.current.on('load', () => {
      setMapLoaded(true);
      // stores.forEach((store) => {
      //   new mapboxgl.Marker()
      //    .setLngLat(store.geometry.coordinates)
      //    .addTo(mapRef.current!)
      //    .setPopup(
      //       new mapboxgl.Popup({ offset: 25 })
      //        .setHTML(
      //           `<h3>${store.properties.name}</h3>
      //           <p>${store.properties.address}</p>
      //           <p>${store.properties.phoneFormatted}</p>`
      //         )
      //     );
      // });
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!selectedStore) return;

    mapRef.current!.flyTo({
      center: selectedStore.geometry.coordinates,
      zoom: 13,
      duration: 1000,
    });
  }, [selectedStore]);

  return (
    <div className="flex absolute top-0 left-0 right-0 bottom-0 h-full w-full">
      {/* Sidebar placeholder */}
      <Sidebar
        stores={stores}
        setSelectedStore={setSelectedStore}
        selectedStore={selectedStore}
      />

      {/* Map container */}
      <div className="w-3/4">
        <div className="h-full w-full" ref={mapContainerRef}>
          {mapLoaded &&
            stores.map((location) => (
              <Marker
                key={location.properties.name}
                feature={location}
                map={mapRef.current!}
                setSelectedStore={setSelectedStore}
                selectedStore={selectedStore}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
