import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import groupBy from "lodash.groupby";
import { useParams, useRoutes, useNavigate } from "react-router-dom";
import { BallotType } from "../../api";
import { useGetBallots } from "../Hooks/useGetBallots";
import { FilmCategory, userStore } from "../Store/user.store";

export type BallotId = BallotType["items"][number]["id"];
const Category = () => {
  const params = useParams<{ id: BallotId }>();
  const { id } = params;

  const { ballots, nominees } = useGetBallots(id);
  const navigate = useNavigate();
  const categoryById = groupBy(ballots?.items, (ballot) => ballot.id);
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
      {nominees?.map((nominee) => {
        return (
          <div
            className={
              categories[id] === nominee.id ? "ballot selected" : "ballot"
            }
            onClick={() => {
              setSelectedFilmByCategory(id, nominee.id);
              navigate("/");
            }}
            key={nominee.id}
          >
            <img src={nominee.photoUrL} />
            <span>
              {categories[id] === nominee.id && (
                <FontAwesomeIcon icon={faCheck} />
              )}
              {nominee.title}
            </span>
          </div>
        );
      }) ?? []}
    </div>
  );
};

export default Category;
