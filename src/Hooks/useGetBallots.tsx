import { useEffect, useState } from "react";
import { BallotType } from "../../api";
import api from "../Api/Api";
import { FilmCategory, userStore } from "../Store/user.store";
import groupBy from "lodash.groupby";
import { BallotId } from "../Pages/Category";

export type BallotCategories = BallotType["items"][number]["title"][];

export const useGetBallots = (categoryId?: FilmCategory) => {
  const [ballots, setBallots] = useState<BallotType | undefined>();
  const [titles, setTitles] = useState<BallotCategories | undefined>();
  const [ids, setCategoryIds] = useState<FilmCategory[] | undefined>();
  const { initSelectedFilmsByCategory, categories } = userStore(
    ({ initSelectedFilmsByCategory, categories }) => ({
      initSelectedFilmsByCategory,
      categories,
    })
  );

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

        initSelectedFilmsByCategory(initCategorySelection);
        setTitles(categoryTitles);
        setCategoryIds(categoryIds);
        setBallots(ballots);
      } catch (e: unknown) {
        e instanceof Error && console.log(e.message);
      }
    }

    getBallots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalCategories = titles?.length ?? 0;

  const categoryById = groupBy(ballots?.items, (ballot) => ballot.id);

  const getTitle = (id: BallotId | undefined) => {
    if (id) {
      return categoryById[id]?.find((item) => item.id === id)?.title;
    }
    return "";
  };

  let nominees;
  if (categoryId) {
    [nominees] = categoryById[categoryId ?? "best-actor"] ?? [];
  }

  return {
    totalCategories,
    ballots,
    categoryIds: ids,
    titles,
    categoryById,
    nominees: nominees?.items,
    getTitle,
  };
};
