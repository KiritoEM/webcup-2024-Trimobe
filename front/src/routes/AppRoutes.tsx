import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeList } from "../helpers/constants";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map((route, index) => (
          <Route key={index} path={route.url} Component={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
