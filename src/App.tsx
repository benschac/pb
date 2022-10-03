import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./App.css";
import { useGetBallots } from "./Hooks/useGetBallots";
import { userStore } from "./Store/user.store";

const App: React.FC = () => {
  const { totalCategories, categoryIds, categoryById, titles, ballots } =
    useGetBallots();
  const { getSelectedFilmsByCategoryCount, categories, getSelectedFilm } =
    userStore((state) => ({
      getSelectedFilmsByCategoryCount: state.getSelectedFilmsByCategoryCount,
      getSelectedFilm: state.getSelectedFilm,
      categories: state.categories,
    }));

  return (
    <div className="grid">
      {categoryIds?.map((id, idx) => {
        const category = categoryById[id];
        const isSelected = getSelectedFilm(id);

        return isSelected ? (
          category?.map((ballot) => {
            return ballot.items.map((item) => {
              if (item.id === getSelectedFilm(id)) {
                return (
                  <div className="category-title" key={item.id}>
                    <Link to={`/${id}`}>
                      <h3>
                        {categoryById[id].find((item) => item.id === id)?.title}
                        <span style={{ paddingLeft: 4 }}>
                          {<FontAwesomeIcon icon={faCheck} />}
                        </span>
                      </h3>
                    </Link>
                    <img src={item.photoUrL} />
                    {item.title}
                  </div>
                );
              }
            });
          })
        ) : (
          <div className="category-title">
            <h3>
              <Link to={`/${id}`}>
                {categoryById[id].find((item) => item.id === id)?.title}
              </Link>
            </h3>
            <p>Not Selected</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
