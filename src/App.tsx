import { Link } from "react-router-dom";
import "./App.css";
import Ballot from "./Components/Ballot/Ballot";
import { useGetBallots } from "./Hooks/useGetBallots";
import { userStore } from "./Store/user.store";

const App: React.FC = () => {
  const { categoryIds, categoryById, getTitle } = useGetBallots();
  const { getSelectedFilm } = userStore((state) => ({
    getSelectedFilmsByCategoryCount: state.getSelectedFilmsByCategoryCount,
    getSelectedFilm: state.getSelectedFilm,
    categories: state.categories,
  }));

  return (
    <div className="grid">
      {categoryIds?.map((id) => {
        const category = categoryById[id];
        const isSelected = getSelectedFilm(id);

        return isSelected ? (
          category?.map((ballot) => {
            return ballot.items.map((item) => {
              if (item.id === getSelectedFilm(id)) {
                return <Ballot id={id} ballot={item} />;
              }
              return null;
            });
          })
        ) : (
          <div className="category-title">
            <h3>
              <Link to={`/${id}`}>{getTitle(id)}</Link>
            </h3>
            <p>Not Selected</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
