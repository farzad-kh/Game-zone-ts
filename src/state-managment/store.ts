import { create } from "zustand";
import { Genre } from "../hooks/useGenres";


interface GenreStore {
  genres: Genre;
  addGenre: (data: Genre | any) => void;
  clearGenre: () => void;
}
interface SearchGameStore {
  searchGame: string;
  addSearch: (data: string | any) => void;
}
interface PageGameStore {
  currentPage: number;
  addPage: (data: number | any) => void;
}
interface CurrentButtonStore {
  currentButton: number|any;
  addCurrentButton: (data: number | any) => void;
}

const useGenresStore = create<GenreStore>((set) => ({
  genres: {} as Genre,

  addGenre: (data) => {
    set(() => ({
      genres: data,
    }));
  },

  clearGenre: () => {
    set(() => ({
      genres: {} as Genre
    }));
  },
}));

const useSearchStore = create<SearchGameStore>((set) => ({
  searchGame: "",

  addSearch: (data) => {
    set(() => ({
      searchGame: data,
    }));
  },
}));

const usePageStore = create<PageGameStore>((set) => ({
  currentPage: 1,

  addPage: (data) => {
    set(() => ({
      currentPage: data,
    }));
  },
}));
const useCurrentButtonStore = create<CurrentButtonStore>((set) => ({
  currentButton: 1,

  addCurrentButton: (data) => {
    set(() => ({
     currentButton: data,
    }));
  },
}));

export { useGenresStore, useSearchStore, usePageStore ,useCurrentButtonStore };
