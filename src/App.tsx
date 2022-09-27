import "./App.css";
import Ballot from "./Components/Ballot/Ballot";

const App: React.FC = () => {
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
      <Ballot />
    </div>
  );
};

export default App;
