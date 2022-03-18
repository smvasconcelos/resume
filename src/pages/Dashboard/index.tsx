import dividerIcon from "assets/divider.svg";
import ptIcon from "assets/flags/pt.svg";
import enIcon from "assets/flags/en.svg";
import menuIcon from "assets/menu.svg";

import SideBar from "components/SideBar";
import LangContext from "contexts/Lang";

import React, { useContext, useEffect, useState } from "react";
import { DashContainer, SideBarContainer } from "components/SideBar/styles";
import {
  Article,
  ArticleDivider,
  Container,
  Content,
  Divider,
  ExperienceContainer,
  ExperienceIcon,
  ExperiencePeriod,
  ExperienceTitle,
  MenuIcon,
  MenuItem,
  SubTitle,
  Text,
  Title,
  TopMenu
} from "./styles";

const DashboardContent: React.FC = () => {
  const { lang, changeLang } = useContext(LangContext);
  const [openSideBar, setOpenSiteBar] = useState<boolean>(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const About = () => {
    return (
      <Article>
        <Title>About Me</Title>
        <Divider />
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
          consectetur voluptates veniam deleniti odio architecto in quam!
          Nostrum rem dolor ipsam voluptas voluptate vero, alias, vitae quasi
          repudiandae qui placeat.
        </Text>
      </Article>
    );
  };

  const Experience = () => {
    return (
      <Article>
        <Title>Experience</Title>
        <Divider />
        <ExperienceContainer>
          <ExperiencePeriod>2019 - 2020</ExperiencePeriod>
          <ExperienceIcon src={dividerIcon} />
          <div>
            <ExperienceTitle>Lorem ipsum dolor s</ExperienceTitle>
            <SubTitle>ASKDAP</SubTitle>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea
              ratione doloremque ab, natus at tempora a totam nisi possimus
              architecto, perspiciatis fugit earum explicabo incidunt veritatis
              deleniti dolorem quisquam!
            </Text>
          </div>
        </ExperienceContainer>
      </Article>
    );
  };

  const PersonalWorks = () => {
    return (
      <Article>
        <Title>About Me</Title>
        <Divider />
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
          consectetur voluptates veniam deleniti odio architecto in quam!
          Nostrum rem dolor ipsam voluptas voluptate vero, alias, vitae quasi
          repudiandae qui placeat.
        </Text>
      </Article>
    );
  };

  return (
    <DashContainer>
      <SideBar
        mobile={screenWidth < 1200}
        open={openSideBar}
        setOpen={setOpenSiteBar}
      />
      <Container>
        <TopMenu>
          <MenuItem onClick={() => changeLang("pt")}>
            <MenuIcon src={ptIcon} />
          </MenuItem>
          <MenuItem onClick={() => changeLang("en")}>
            <MenuIcon src={enIcon} />
          </MenuItem>
          {screenWidth < 1200 ? (
            <MenuItem onClick={() => setOpenSiteBar(true)}>
              <MenuIcon src={menuIcon} />
            </MenuItem>
          ) : (
            <></>
          )}
        </TopMenu>
        <Content>
          <About />
          <ArticleDivider />
          <Experience />
          <ArticleDivider />
          <PersonalWorks />
        </Content>
      </Container>
    </DashContainer>
  );
};

const Dashboard: React.FC = () => {
  return <DashboardContent />;
};

export default Dashboard;
