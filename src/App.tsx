import { Link } from "react-router-dom";
import "./App.css";
import { useGetBallots } from "./Hooks/useGetBallots";
import { userStore } from "./Store/user.store";

const App: React.FC = () => {
  const { ballots } = useGetBallots();
  const category = userStore((state) => state);
  return (
    <div>
      <h1>Movie Ballot Vote</h1>
      {ballots?.items.map(
        (cat) =>
          (
            <div key={cat.id}>
              <h2>
                <Link to={`/category/${cat.id}`}>{cat.title}</Link>
              </h2>
              {cat.items.map((item) => (
                <div key={item.id}>
                  {category?.[cat.id] === item.id ? (
                    <>
                      <img alt={item.id} src={item.photoUrL} />
                      <h3>{item.title}</h3>
                    </>
                  ) : null}
                </div>
              ))}
              {category?.[cat.id] === undefined && "Please select a movie"}
            </div>
          ) ?? "loading"
      )}
    </div>
  );
};

export default App;
