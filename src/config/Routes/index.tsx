import Dashboard from "pages/Dashboard";

import React, { useContext } from "react";
import {
  HashRouter,
  Navigate,
  Route,
  Routes as RoutesDom,
} from "react-router-dom";


const Routes: React.FC = () => {

  return (
    <HashRouter>
      <RoutesDom>
				<Route path="/" element={<Dashboard />} />
      </RoutesDom>
    </HashRouter>
  );
};

export default Routes;
