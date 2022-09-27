import "./App.css";
import Ballot from "./Components/Ballot/Ballot";
import api from "../src/Api/Api";
import { useEffect, useState } from "react";
import { BallotType } from "../api";

const App: React.FC = () => {
  const [ballots, setBallots] = useState<BallotType | undefined>();
  useEffect(() => {
    async function getBallots() {
      const ballots = await api.getBallotData();
      setBallots(ballots);
      return ballots;
    }

    getBallots();
  }, []);
  return (
    <div>
      <header>
        <img
          src={
            "https://www.dailypay.com/wp-content/uploads/DailyPay-Logo-White.svg"
          }
          alt="logo"
        />
      </header>

      <ul>
        {ballots?.items.map((ballot) => (
          <li key={ballot.id}>
            {ballot.items.map((item) => (
              <div key={item.id}>
                <img alt={item.id} src={item.photoUrL} />
                {item.title}
              </div>
            ))}
          </li>
        )) ?? "loading"}
      </ul>
      <Ballot />
    </div>
  );
};

export default App;
