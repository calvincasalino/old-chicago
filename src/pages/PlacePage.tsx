import { useParams, Link } from "react-router-dom";
import { places } from "../data/places";

export default function PlacePage() {
  const { slug } = useParams();
  const place = places.find(p => p.slug === slug);

  if (!place) {
    return (
      <div className="page">
        <header className="header">
          <h1>Not found</h1>
          <p>We couldn’t find that location.</p>
          <Link to="/" className="link">← Back to map</Link>
        </header>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="header">
        <h1>{place.name}</h1>
        <p>
          <strong>Coordinates:</strong> {place.lat.toFixed(5)}, {place.lng.toFixed(5)}
        </p>
        <Link to="/" className="link">← Back to map</Link>
      </header>

      <div className="gallery">
        {place.photos.map((ph, i) => (
          <figure key={i} className="card">
            {/* Use loading="lazy" to keep page snappy */}
            <img src={ph.src} alt={ph.caption || `${place.name} photo ${i + 1}`} loading="lazy" />
            {ph.caption && <figcaption>{ph.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  );
}
