import create from "zustand";
import { combine } from "zustand/middleware";
import { BallotType } from "../../api";

export type FilmCategory = BallotType["items"][number]["id"];

export const userStore = create(
  combine(
    {
      categories: {} as Record<FilmCategory, string | undefined>,
    },
    (set, get) => {
      return {
        initSelectedFilmsByCategory: (
          categories: Record<FilmCategory, string | undefined>
        ) => {
          set({ categories });
        },
        getSelectedFilmsByCategoryCount: () => {
          return Object.values(get().categories).filter(Boolean).length;
        },
        setSelectedFilmByCategory: (
          category: FilmCategory,
          selection: string
        ) => {
          set((state) => ({
            ...state,
            categories: {
              ...get().categories,
              [category]: selection,
            },
          }));
        },
        getSelectedFilm: (category: FilmCategory) => {
          return get().categories[category];
        },
      };
    }
  )
);
