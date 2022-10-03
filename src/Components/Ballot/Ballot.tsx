import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useGetBallots } from "../../Hooks/useGetBallots";
import { BallotId } from "../../Pages/Category";

export type BallotType = {
  id: string;
  title: string;
  photoUrL: string;
};

const Ballot = ({ id, ballot }: { id: BallotId; ballot: BallotType }) => {
  const { getTitle } = useGetBallots(id);
  const { id: ballotId, title, photoUrL } = ballot;

  return (
    <Link to={`/${id}`}>
      <div className="category-title" key={`${ballotId}-${title}`}>
        <h3>
          {getTitle(id)}
          <span style={{ paddingLeft: 4 }}>
            {<FontAwesomeIcon icon={faCheck} />}
          </span>
        </h3>
        <img alt={title} src={photoUrL} />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default Ballot;
