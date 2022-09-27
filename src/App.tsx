import "./App.css";
import Ballot from "./Components/Ballot/Ballot";
import { useGetBallots } from "./Hooks/useGetBallots";

const App: React.FC = () => {
  const { ballots } = useGetBallots();
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
