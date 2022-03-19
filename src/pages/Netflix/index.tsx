import ptIcon from "assets/flags/pt.svg";
import enIcon from "assets/flags/en.svg";
import menuIcon from "assets/menu.svg";
import githubIcon from "assets/github.svg";

import LangContext from "contexts/Lang";

import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";

const NetflixContent: React.FC = () => {
  const { lang, changeLang } = useContext(LangContext);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return <Container></Container>;
};

const Netflix: React.FC = () => {
  return <NetflixContent />;
};

export default Netflix;
