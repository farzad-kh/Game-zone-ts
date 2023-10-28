import Genres from "../data/Genres";
export interface Genre {
  id: string;
  name: string;
  image_background: string | null;
  slug: string|null;
}

export const useGenres = () => ({ data: Genres, loading: false, error: "" });
