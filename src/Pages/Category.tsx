import groupBy from "lodash.groupby";
import { useParams, useRoutes, useNavigate } from "react-router-dom";
import { BallotType } from "../../api";
import { useGetBallots } from "../Hooks/useGetBallots";
import { FilmCategory, userStore } from "../Store/user.store";

export type BallotId = BallotType["items"][number]["id"];
const Category = () => {
  const params = useParams<{ id: BallotId }>();
  const { id } = params;
  const { ballots, categoryIds } = useGetBallots();
  const navigate = useNavigate();
  const categoryById = groupBy(ballots?.items, (ballot) => ballot.id);
  const title = ballots?.items.find((ballot) => ballot.id === id)?.title;
  const category = categoryById[id ?? ""];
  const { setSelectedFilmByCategory, categories } = userStore(
    ({ categories, setSelectedFilmByCategory }) => ({
      setSelectedFilmByCategory,
      categories,
    })
  );

  if (!id) {
    return <div>loading...</div>;
  }

  return (
    <div className="grid">
      {category?.map((ballot) => {
        return ballot.items.map((item) => {
          return (
            <div
              onClick={() => {
                setSelectedFilmByCategory(id, item.id);
                navigate("/");
              }}
              key={item.id}
            >
              <img src={item.photoUrL} />
              {item.title}
            </div>
          );
        });
      })}
    </div>
  );
};

export default Category;
