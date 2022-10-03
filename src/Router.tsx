import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MainLayout from "./Layouts/MainLayout";
import Category from "./Pages/Category";
import NoMatch from "./Pages/NoMatch";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path=":id" element={<Category />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
