export type Photo = { src: string; caption?: string; year?: number };
export type Place = {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  photos: Photo[];
};

export const places: Place[] = [
  {
    slug: "east-scott",
    name: "East Scott St",
    lat: 41.90488297335813,
    lng: -87.62708326454646,
    photos: [
      { src: "/photos/6-12-e-scott.jpg", caption: "6-12 Scott St c. 19XX" },
      { src: "/photos/60-70-e-scott.jpg", caption: "60-70 Scott St c. 19XX" }
    ]
  },
  {
    slug: "elm-and-north-state",
    name: "Elm St and North State St",
    lat: 41.903179057205215,
    lng: -87.62864768019689,
    photos: [
      { src: "/photos/10-w-elm.jpg", caption: "10 W Elm St c. 19XX" },
      { src: "/photos/18-e-elm.jpg", caption: "18 E Elm St c. 19XX" },
      { src: "/photos/73-e-elm.jpg", caption: "73 E Elm St c. 19XX" }
    ]
  },
  {
    slug: "east-lake-shore-drive",
    name: "East Lake Shore Drive",
    lat: 41.90088763839657,
    lng: -87.6223297609825,
    photos: [
      { src: "/photos/189-e-LSD.jpg", caption: "189 E Lake Shore Drive c. 19XX" }
    ]
  }
];
