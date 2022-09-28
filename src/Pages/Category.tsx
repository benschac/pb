import groupBy from "lodash.groupby";
import { useParams } from "react-router-dom";
import { BallotType } from "../../api";
import { useGetBallots } from "../Hooks/useGetBallots";
import { userStore } from "../Store/user.store";

export type BallotId = BallotType["items"][number]["id"];

const Category = () => {
  const params = useParams<{ id: BallotId }>();
  const { id } = params;
  const { ballots } = useGetBallots();
  const setSelectedFilm = userStore((state) => state.setSelectedFilm);
  const categoryById = groupBy(ballots?.items, (ballot) => ballot.id);
  const title = ballots?.items.find((ballot) => ballot.id === id)?.title;

  if (!id) {
    return <div>loading</div>;
  }

  return (
    <>
      <h1>{title}</h1>
      {categoryById[id]?.map((category) => (
        <div key={category.id}>
          {category.items.map((i) => (
            <div
              onClick={() => {
                setSelectedFilm(id, i.id);
              }}
              key={i.id}
            >
              <img alt={i.id} src={i.photoUrL} />
              {i.title}
            </div>
          ))}
          {category.title}
        </div>
      ))}
    </>
  );
};

export default Category;
