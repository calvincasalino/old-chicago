import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { places } from "../data/places";

function FitToPlaces() {
  const map = useMap();
  const bounds = useMemo(() => {
    if (places.length === 0) return null;
    const latlngs = places.map(p => [p.lat, p.lng]) as [number, number][];
    // @ts-ignore
    return L.latLngBounds(latlngs);
  }, []);
  if (bounds) map.fitBounds(bounds.pad(0.2)); // add padding
  return null;
}

export default function HomeMapPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <header className="header">
        <h1>Old Chicago</h1>
        <p>Click a dot to view historical photos from that location.</p>
      </header>

      <div className="map-wrap">
        <MapContainer className="map" center={[41.8781, -87.6298]} zoom={12} scrollWheelZoom>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitToPlaces />
          {places.map(p => (
            <CircleMarker
              key={p.slug}
              center={[p.lat, p.lng]}
              radius={7}
              weight={2}
              opacity={1}
              fillOpacity={0.8}
              eventHandlers={{
                click: () => navigate(`/place/${p.slug}`)
              }}
            >
              <Tooltip>{p.name}</Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
