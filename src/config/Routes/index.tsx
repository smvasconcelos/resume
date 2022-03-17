import Login from "pages/Dashboard";

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
				<Route path="/login" element={<Login />} />
      </RoutesDom>
    </HashRouter>
  );
};

export default Routes;
