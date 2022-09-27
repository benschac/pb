import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useGetBallots } from "../Hooks/useGetBallots";

const MainLayout: React.FC = () => {
  const { ballots } = useGetBallots();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {ballots?.items.map(
            (cat) =>
              (
                <li key={cat.id}>
                  <Link to={`/category/${cat.id}`}>{cat.title}</Link>
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
