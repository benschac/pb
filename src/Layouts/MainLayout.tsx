import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BallotType } from "../../api";
import api from "../Api/Api";

const MainLayout: React.FC = () => {
  const [ballots, setBallots] = useState<BallotType | undefined>();
  const [category, setCategory] = useState<
    BallotType["items"][number]["title"][] | undefined
  >();
  useEffect(() => {
    async function getBallots() {
      const ballots = await api.getBallotData();
      const cat = ballots?.items.map((ballot) => ballot.title);
      setCategory(cat);
      setBallots(ballots);
      return ballots;
    }

    getBallots();
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {category?.map(
            (cat) =>
              (
                <li key={cat}>
                  <Link to={`/category/${cat}`}>{cat}</Link>
                </li>
              ) ?? "loading"
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
