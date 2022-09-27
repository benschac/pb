import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useGetBallots } from "../Hooks/useGetBallots";

const MainLayout: React.FC = () => {
  const { categories } = useGetBallots();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {categories?.map(
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
