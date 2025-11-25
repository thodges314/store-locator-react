import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import type { StoreFeature } from './assets/locations';

interface MarkerProps {
  feature: StoreFeature;
  map: mapboxgl.Map;
}

const Marker = ({ map, feature }: MarkerProps) => {
  const { geometry } = feature;

  const contentRef = useRef(document.createElement('div'));
  const markerRef = useRef<mapboxgl.Marker | null>(null);

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
          className={
            'bg-contain bg-no-repeat cursor-pointer transition w-[37px] h-[40px]'
          }
          style={{
            backgroundImage: 'url("./sg-marker.svg")',
          }}
        ></div>,
        contentRef.current
      )}
    </>
  );
};

export default Marker;
