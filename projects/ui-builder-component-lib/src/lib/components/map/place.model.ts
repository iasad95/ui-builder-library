export interface Place {
  name: string;
  icon: string;
  types: string[];
  rating: number;
  vicinity: string;
  url: string;
  place_id: string;
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
}
