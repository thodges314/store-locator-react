export interface StoreFeature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
  properties: {
    name: string;
    phoneFormatted: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    state: string;
  };
}

export const storeLocations: StoreFeature[] = [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.47277, 38.56461],
    },
    properties: {
      name: 'Newton Booth',
      phoneFormatted: '1 (916) 454-1272',
      phone: '+19164541272',
      address: '2829 S Street',
      city: 'Sacramento',
      country: 'United States',
      postalCode: '95816',
      state: 'CA',
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.4777, 38.57528],
    },
    properties: {
      name: 'Midtown',
      phoneFormatted: '1 (916) 662-7625',
      phone: '+19166627625',
      address: '2200 K Street',
      city: 'Sacramento',
      country: 'United States',
      postalCode: '95816',
      state: 'CA',
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.44906, 38.57172],
    },
    properties: {
      name: 'East Sacramento',
      phoneFormatted: '1 (916) 382-4145',
      phone: '+19163824145',
      address: '4201 H Street',
      city: 'Sacramento',
      country: 'United States',
      postalCode: '95816',
      state: 'CA',
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.48789, 38.57168],
    },
    properties: {
      name: 'Fremont Park',
      phoneFormatted: '1 (916) 309-4579',
      phone: '+19163094579',
      address: '1615 16th Street',
      city: 'Sacramento',
      country: 'United States',
      postalCode: '95814',
      state: 'CA',
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.4952, 38.58112],
    },
    properties: {
      name: 'Downtown',
      phoneFormatted: '1 (916) 443-4960',
      phone: '+19164434960',
      address: '1010 9th Street',
      city: 'Sacramento',
      country: 'United States',
      postalCode: '95814',
      state: 'CA',
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.40124, 38.57502],
    },
    properties: {
      name: 'Sierra Faire',
      phoneFormatted: '1 (916) 974-7404',
      phone: '+19169747404',
      address: '2600 Fair Oaks Blvd #101',
      city: 'Sacramento',
      country: 'United States',
      postalCode: '95864',
      state: 'CA',
    },
  },
];
