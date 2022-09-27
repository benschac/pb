import groupBy from "lodash.groupby";
import { useParams } from "react-router-dom";
import { BallotType } from "../../api";
import { useGetBallots } from "../Hooks/useGetBallots";

export type BallotId = BallotType["items"][number]["id"];

const Category = () => {
  const params = useParams<{ id: BallotId }>();
  const { id } = params;
  const { ballots } = useGetBallots();
  const categoryById = groupBy(ballots?.items, (ballot) => ballot.id);
  const title = ballots?.items.find((ballot) => ballot.id === id)?.title;

  if (!id) {
    return <div>loading</div>;
  }

  return (
    <div>
      {title}
      {categoryById[id]?.map((category) => (
        <div key={category.id}>
          {category.items.map((i) => (
            <div key={i.id}>
              <img alt={i.id} src={i.photoUrL} />
              {i.title}
            </div>
          ))}
          {category.title}
        </div>
      ))}
    </div>
  );
};

export default Category;
