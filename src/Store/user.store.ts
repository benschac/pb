import create from "zustand";
import { combine } from "zustand/middleware";
import { BallotType } from "../../api";

type CategorySelection = BallotType["items"][number]["id"];

export const userStore = create(
  combine(
    {
      // TODO -- make more specific type
      category: {} as Record<CategorySelection, string | undefined>,
    },
    (set, get) => {
      return {
        setCategorySelection: (
          category: CategorySelection,
          selection: string
        ) => {
          set({ [category]: selection });
        },
        getSelection: (category: CategorySelection) => {
          if (get().category[category]) {
            return get().category[category];
          }
        },
      };
    }
  )
);
