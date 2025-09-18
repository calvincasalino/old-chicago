import { useEffect, useState } from "react";
import { hygraph } from "../lib/hygraph";
import { GET_BUILDINGS } from "../queries/buildings";
import type { Place } from "../types";

type GQLBuilding = {
  slug: string;
  title?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  photo?: { url?: string | null } | null;
};

type GQLRes = { buildings: GQLBuilding[] };

export function usePlaces() {
  const [data, setData] = useState<Place[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await hygraph.request<GQLRes>(GET_BUILDINGS, { first: 500 });
        if (cancelled) return;

        const mapped: Place[] = (res.buildings ?? [])
          .filter(b => b.latitude != null && b.longitude != null) // only items we can plot
          .map(b => ({
            slug: b.slug,
            name: b.title ?? "(Untitled)",
            lat: b.latitude as number,
            lng: b.longitude as number,
            photoUrl: b.photo?.url ?? undefined,
          }));

        setData(mapped);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e : new Error("Unknown error"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}
