import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useGetBallots } from "../Hooks/useGetBallots";
import { FilmCategory, userStore } from "../Store/user.store";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";

const MainLayout = () => {
  const { categoryIds, titles, totalCategories, categoryById } =
    useGetBallots();
  const { getSelectedFilmsByCategoryCount, categories, getSelectedFilm } =
    userStore((state) => ({
      getSelectedFilmsByCategoryCount: state.getSelectedFilmsByCategoryCount,
      getSelectedFilm: state.getSelectedFilm,
      categories: state.categories,
    }));
  const { id } = useParams<{ id: FilmCategory }>();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="title">
        <h1>{id && categoryById[id]?.find((item) => item.id === id)?.title}</h1>
        {id && (
          <Link to="/">
            <FontAwesomeIcon
              size="lg"
              icon={faArrowRight}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            />
          </Link>
        )}
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        {getSelectedFilmsByCategoryCount() === totalCategories && (
          <div
            onClick={openModal}
            style={{
              position: "fixed",
              bottom: 20,
              right: 20,
            }}
          >
            Submit
          </div>
        )}
      </footer>
      <ReactModal style={customStyles} isOpen={modalIsOpen}>
        <div onClick={closeModal}>
          {categoryIds?.map((categoryId, idx) => {
            const selected = categories[categoryId];
            const selectedKey = categories[categoryId];
            const nominees = [...categoryById[categoryId][0].items];
            const nomineeTitle = nominees.find((nominee) => nominee.id)?.title;
            return (
              <div key={categoryId}>
                {titles?.[idx]}: {nomineeTitle}
              </div>
            );
          })}
          <button onClick={closeModal}>close</button>
        </div>
      </ReactModal>
    </>
  );
};

export default MainLayout;
