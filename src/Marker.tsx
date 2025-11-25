import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import type { StoreFeature } from './assets/locations';

interface MarkerProps {
  feature: StoreFeature;
  map: mapboxgl.Map;
  selectedStore: StoreFeature | null;
  setSelectedStore: (store: StoreFeature | null) => void;
}

const Marker = ({
  map,
  feature,
  selectedStore,
  setSelectedStore,
}: MarkerProps) => {
  const { geometry } = feature;

  const contentRef = useRef(document.createElement('div'));
  const markerRef = useRef<mapboxgl.Marker | null>(null);
  const isSelected = selectedStore?.properties.name === feature.properties.name;

  useEffect(() => {
    markerRef.current = new mapboxgl.Marker(contentRef.current)
      .setLngLat(geometry.coordinates)
      .addTo(map);

    return () => {
      markerRef.current?.remove();
    };
  }, []);

  return (
    <>
      {createPortal(
        <div
          onClick={() => setSelectedStore(feature)}
          className={
            'bg-contain bg-no-repeat cursor-pointer transition w-[37px] h-[40px]'
          }
          style={{
            backgroundImage: isSelected
              ? 'url("./sg-marker-selected.svg")'
              : 'url("./sg-marker.svg")',
          }}
        ></div>,
        contentRef.current
      )}
    </>
  );
};

export default Marker;
