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
      {categoryIds?.map((id) => {
        const category = categoryById[id];
        return category?.map((ballot) => {
          return ballot.items.map((item) => {
            if (item.id === getSelectedFilm(id)) {
              return (
                <div key={item.id}>
                  <img
                    style={{
                      width: 200,
                      height: 100,
                    }}
                    src={item.photoUrL}
                  />
                  {item.title}
                </div>
              );
            }
          });
        });
      })}
    </div>
  );
};

export default App;
