import { useEffect, useState, useMemo, memo } from "react";
import { BallotType } from "../../api";
import api from "../Api/Api";
import { FilmCategory, userStore } from "../Store/user.store";
import groupBy from "lodash.groupby";

export type BallotCategories = BallotType["items"][number]["title"][];

export const useGetBallots = () => {
  const [ballots, setBallots] = useState<BallotType | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [titles, setTitles] = useState<BallotCategories | undefined>();
  const [ids, setCategoryIds] = useState<FilmCategory[] | undefined>();
  const { initFilmCategories, categories, getSelectedFilmsByCategoryCount } =
    userStore((state) => ({
      initFilmCategories: state.initSelectedFilmsByCategory,
      getSelectedFilmsByCategoryCount: state.getSelectedFilmsByCategoryCount,
      categories: state.categories,
    }));

  useEffect(() => {
    async function getBallots() {
      try {
        const ballots = await api.getBallotData();
        const categoryTitles = ballots?.items.map((ballot) => ballot.title);
        const categoryIds = ballots?.items.map((ballot) => ballot.id);
        const initCategorySelection = categoryIds.reduce((prev, curr) => {
          prev[curr] = categories[curr] ? categories[curr] : undefined;
          return prev;
        }, {} as Record<FilmCategory[number], string | undefined>);

        initFilmCategories(initCategorySelection);
        setTitles(categoryTitles);
        setCategoryIds(categoryIds);
        setBallots(ballots);
      } catch (e: unknown) {
        e instanceof Error && setError(e.message);
      }
    }

    getBallots();
  }, []);

  const totalCategories = titles?.length ?? 0;

  const categoryById = useMemo(() => {
    return groupBy(ballots?.items, (ballot) => ballot.id);
  }, [ballots?.items]);

  return {
    totalCategories,
    ballots,
    error,
    categoryIds: ids,
    titles,
    categoryById,
  };
};
