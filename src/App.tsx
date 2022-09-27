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

      {JSON.stringify(ballots, null, 2)}
      <Ballot />
    </div>
  );
};

export default App;
