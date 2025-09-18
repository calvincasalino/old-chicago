// Minimal list item for the map
export type Place = {
  slug: string;
  name: string;      // maps from building.title
  lat: number;       // building.latitude
  lng: number;       // building.longitude
  photoUrl?: string; // building.photo?.url (optional, handy for future)
};

// Full detail for the place page (all Hygraph fields you listed)
export type PlaceDetail = {
  slug: string;
  title?: string | null;
  subject?: string | null;
  description?: string | null;
  creator?: string | null;
  publisher?: string | null;
  date?: string | null;
  mediaType?: string | null;
  formatType?: string | null;
  identifier?: string | null;
  source?: string | null;
  language?: string | null;
  coverage?: string | null;
  rights?: string | null;
  collection?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  photoUrl?: string | null; // single Asset picker
};
