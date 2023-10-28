import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  released: string;
}

export const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  currentPage: string | number,
  searchGame: string|undefined
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.slug||null,
        dates: `2021-0${(
          new Date().getMonth() - 5
        ).toLocaleString()}-01,2023-12-31.2023-01-01`,
        ordering: "  -added -released ",
        platforms: selectedPlatform?.id,
        page: currentPage,
        search: searchGame,
      },
    },

    [selectedGenre, selectedPlatform, currentPage,searchGame]
  );
