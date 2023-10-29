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
  currentPage: number|any;
  currentButton: number|any;
  addPage: (data: number | any) => void;
  addCurrentButton: (data: number | any) => void;
  increment: () => void;
  decrement: () => void;
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
      genres: {} as Genre,
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
  currentButton: 1,
  addPage: (data) => {
    set(() => ({
      currentPage: data,
    }));
  },

  addCurrentButton: (data) => {
    set(() => ({
      currentButton: data,
    }));
  },

  increment: () => {
    set((state) => ({
      currentPage: state.currentPage + 1,
      currentButton: state.currentButton + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      currentPage: state.currentPage - 1,
      currentButton: state.currentButton - 1,
    }));
  },
}));

export { useGenresStore, useSearchStore, usePageStore };
