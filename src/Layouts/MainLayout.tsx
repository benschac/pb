import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useGetBallots } from "../Hooks/useGetBallots";
import { BallotId } from "../Pages/Category";
import { FilmCategory, userStore } from "../Store/user.store";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MainLayout: React.FC = () => {
  const { categoryIds, titles, ballots, totalCategories, categoryById } =
    useGetBallots();
  const { getSelectedFilmsByCategoryCount, categories } = userStore(
    (state) => ({
      getSelectedFilmsByCategoryCount: state.getSelectedFilmsByCategoryCount,
      getSelectedFilm: state.getSelectedFilm,
      categories: state.categories,
    })
  );
  const { id } = useParams<{ id: FilmCategory }>();

  return (
    <>
      <header className="title">
        <h1>{id && categoryById[id]?.find((item) => item.id === id)?.title}</h1>
        {id && (
          <Link to="/">
            <FontAwesomeIcon size="lg" icon={faArrowRight} />
          </Link>
        )}
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <h3>
          Selected {getSelectedFilmsByCategoryCount()} / {totalCategories}
        </h3>
        {getSelectedFilmsByCategoryCount() === totalCategories && (
          <div>Submit</div>
        )}
      </footer>
    </>
  );
};

export default MainLayout;
