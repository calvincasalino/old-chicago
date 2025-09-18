import { useEffect, useState } from "react";
import { hygraph } from "../lib/hygraph";
import { GET_BUILDING } from "../queries/buildings";
import type { PlaceDetail } from "../types";

type GQLBuilding = {
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
  photo?: { url?: string | null } | null;
};

type GQLRes = { building: GQLBuilding | null };

export function usePlace(slug?: string) {
  const [data, setData] = useState<PlaceDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) { setLoading(false); return; }
    let cancelled = false;

    (async () => {
      try {
        const res = await hygraph.request<GQLRes>(GET_BUILDING, { slug });
        if (cancelled) return;

        const b = res.building;
        const mapped: PlaceDetail | null = b ? {
          slug: b.slug,
          title: b.title,
          subject: b.subject,
          description: b.description,
          creator: b.creator,
          publisher: b.publisher,
          date: b.date,
          mediaType: b.mediaType,
          formatType: b.formatType,
          identifier: b.identifier,
          source: b.source,
          language: b.language,
          coverage: b.coverage,
          rights: b.rights,
          collection: b.collection,
          latitude: b.latitude,
          longitude: b.longitude,
          photoUrl: b.photo?.url ?? null,
        } : null;

        setData(mapped);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e : new Error("Unknown error"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, [slug]);

  return { data, loading, error };
}
