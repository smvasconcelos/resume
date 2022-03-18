import SideBar from "components/SideBar";
import LangContext from "contexts/Lang";
import React, { useContext, useEffect, useState } from "react";
import dividerIcon from "assets/divider.svg";
import { useNavigate } from "react-router-dom";
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
  SubTitle,
  Text,
  Title
} from "./styles";
import { DashContainer } from "components/SideBar/styles";

const DashboardContent: React.FC = () => {
  const { lang, changeLang } = useContext(LangContext);

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
      <SideBar />
      <Container>
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
