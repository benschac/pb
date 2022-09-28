import create from "zustand";
import { combine } from "zustand/middleware";
import { BallotType } from "../../api";

type CategorySelection = BallotType["items"][number]["id"];

export const userStore = create(
  combine({} as Record<CategorySelection, string>, (set, get) => {
    return {
      setCategorySelection: (
        category: CategorySelection,
        selection: string
      ) => {
        set({ [category]: selection });
      },
      getSelection: (category: CategorySelection) => {
        if (get()?.[category]) {
          return get()[category];
        }
      },
    };
  })
);
