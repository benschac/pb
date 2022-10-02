import create from "zustand";
import { combine } from "zustand/middleware";
import { BallotType } from "../../api";

export type FilmCategory = BallotType["items"][number]["id"];

export const userStore = create(
  combine({} as Record<FilmCategory, string>, (set, get) => {
    return {
      setSelectedFilm: (category: FilmCategory, selection: string) => {
        set({ [category]: selection });
      },
      getSelectedFilm: (category: FilmCategory) => {
        if (get()?.[category]) {
          return get()[category];
        }
      },
    };
  })
);
