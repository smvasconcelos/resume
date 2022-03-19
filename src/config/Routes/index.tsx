import Dashboard from "pages/Dashboard";
import Netflix from "pages/Netflix";

import React, { useContext } from "react";
import {
  HashRouter,
  Navigate,
  Route,
  Routes as RoutesDom
} from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <RoutesDom>
        <Route path="/" element={<Dashboard />} />
        <Route path="/netflix" element={<Netflix />} />
      </RoutesDom>
    </HashRouter>
  );
};

export default Routes;
