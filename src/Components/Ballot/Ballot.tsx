import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { BallotCategories, useGetBallots } from "../../Hooks/useGetBallots";
import { BallotId } from "../../Pages/Category";
import { FilmCategory } from "../../Store/user.store";

export type BallotType = {
  id: string;
  title: string;
  photoUrL: string;
};

const Ballot = ({ id, ballot }: { id: BallotId; ballot: BallotType }) => {
  const { categoryById, nominees } = useGetBallots(id);
  const { id: ballotId, title, photoUrL } = ballot;

  console.log(ballotId, nominees);
  return (
    <div className="category-title" key={`${ballotId}-${title}`}>
      <Link to={`/${id}`}>
        <h3>
          {categoryById[id]?.find((item) => item.id === id)?.title}
          <span style={{ paddingLeft: 4 }}>
            {<FontAwesomeIcon icon={faCheck} />}
          </span>
        </h3>
      </Link>
      <img alt={title} src={photoUrL} />
      {title}
    </div>
  );
};

export default Ballot;
