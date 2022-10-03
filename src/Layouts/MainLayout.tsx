import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useGetBallots } from "../Hooks/useGetBallots";
import { BallotId } from "../Pages/Category";
import { FilmCategory, userStore } from "../Store/user.store";

const MainLayout: React.FC = () => {
  const { categoryIds, titles, ballots, totalCategories } = useGetBallots();
  const { getSelectedFilmsByCategoryCount, categories } = userStore(
    (state) => ({
      getSelectedFilmsByCategoryCount: state.getSelectedFilmsByCategoryCount,
      getSelectedFilm: state.getSelectedFilm,
      categories: state.categories,
    })
  );

  const { id } = useParams<{ id: BallotId }>();
  const title = ballots?.items.find((ballot) => ballot.id === id)?.title;

  const isSelected = (category: FilmCategory) => {
    console.log(categories[category], "hi");
    return categories[category] ? true : false;
  };

  return (
    <>
      <header className="title">
        <Link to="/">home</Link>
        {categoryIds?.map((id, idx) => {
          return (
            <Link key={id} to={`/${id}`}>
              {titles?.[idx] ?? ""} {isSelected(id) ? "check" : ""}
            </Link>
          );
        })}
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <h3>
          Selected {getSelectedFilmsByCategoryCount()} / {totalCategories}
        </h3>
      </footer>
    </>
  );
};

export default MainLayout;
