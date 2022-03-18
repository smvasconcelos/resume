import profileImage from "assets/profile.jpg";
import linkedinIcon from "assets/linkedin.svg";
import instagramIcon from "assets/instagram.svg";
import gmailIcon from "assets/gmail.svg";
import starIcon from "assets/star.svg";
import filledStarIcon from "assets/filled_star.svg";
import halfStarIcon from "assets/half_star.svg";
import githubIcon from "assets/github.svg";

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  DescriptionContainer,
  Info,
  InfoContainer,
  InfoDescription,
  InfoTitle,
  Profile,
  ProfileImage,
  SkillIcon,
  SkillInfo,
  SkillItem,
  SkillsContainer,
  SkillsTitle,
  SocialContainer,
  SocialIcon,
  SocialIconContainer,
  SocialItem,
  SocialText,
  SocialTextContainer,
  SocialTextDescription,
  SubTitle,
  Title,
  TitleContainer
} from "./styles";
import LangContext from "contexts/Lang";

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useContext(LangContext);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const getSkillLevel = (level: number) => {
    let i = 0;
    let stars = Array();
    for (i; i < level - 1 && i < 9; i++) {
      stars.push(<SkillIcon key={i} src={filledStarIcon} />);
    }
    if (level < Math.ceil(level)) {
      stars.push(<SkillIcon key={i + "k"} src={halfStarIcon} />);
    }
    if (i < 9) {
      for (i; i < 9; i++) {
        stars.push(<SkillIcon key={i + "j"} src={starIcon} />);
      }
    }

    return <div>{stars}</div>;
  };

  return (
    <Container>
      <Profile>
        <ProfileImage src={profileImage} />
      </Profile>
      <>
        <TitleContainer>
          <Title>{lang.NAME}</Title>
          <SubTitle>{lang.EXPERT}</SubTitle>
        </TitleContainer>

        <InfoContainer>
          <InfoTitle>{lang.PERSONAL}</InfoTitle>
          <DescriptionContainer>
            <Info>{lang.NAME_HOLDER}</Info>
            <InfoDescription>{lang.NAME}</InfoDescription>
          </DescriptionContainer>
          <DescriptionContainer>
            <Info>{lang.BIRTH}</Info>
            <InfoDescription>{lang.BIRTH_}</InfoDescription>
          </DescriptionContainer>
          <DescriptionContainer>
            <Info>{lang.NATIONALITY}</Info>
            <InfoDescription>{lang.NATIONALITY_}</InfoDescription>
          </DescriptionContainer>
        </InfoContainer>

        <InfoContainer>
          <InfoTitle>{lang.CONTACT}</InfoTitle>
          <DescriptionContainer>
            <Info>{lang.PHONE}</Info>
            <InfoDescription>{lang.PHONE_}</InfoDescription>
          </DescriptionContainer>
          <DescriptionContainer>
            <Info>{lang.ADRESS}</Info>
            <InfoDescription>{lang.ADRESS_}</InfoDescription>
          </DescriptionContainer>
        </InfoContainer>

        <SkillsContainer>
          <SkillsTitle>{lang.SKILLS}</SkillsTitle>
          <SkillItem>
            <SkillInfo>{lang.ENGLISH}</SkillInfo>
            {getSkillLevel(7.5)}
          </SkillItem>
          <SkillItem>
            <SkillInfo>{lang.REACTJS}</SkillInfo>
            {getSkillLevel(5.5)}
          </SkillItem>
          <SkillItem>
            <SkillInfo>{lang.REACTNATIVE}</SkillInfo>
            {getSkillLevel(5.5)}
          </SkillItem>
          <SkillItem>
            <SkillInfo>{lang.PYTHON}</SkillInfo>
            {getSkillLevel(4.5)}
          </SkillItem>
          <SkillItem>
            <SkillInfo>{lang.WEB}</SkillInfo>
            {getSkillLevel(7.5)}
          </SkillItem>
        </SkillsContainer>

        <SocialContainer>
          <SocialItem
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/samuel-vasconcelos-b196001ba/",
                "_blank"
              )
            }
          >
            <SocialIconContainer>
              <SocialIcon src={linkedinIcon} />
            </SocialIconContainer>
            <SocialTextContainer>
              <SocialText>linkedin.com/smvasconcelos</SocialText>
              <SocialTextDescription>linkedin/profile</SocialTextDescription>
            </SocialTextContainer>
          </SocialItem>
          <SocialItem
            onClick={() =>
              window.open(
                "https://www.instagram.com/smv4sconcelos/?hl=pt-br",
                "_blank"
              )
            }
          >
            <SocialIconContainer>
              <SocialIcon src={instagramIcon} />
            </SocialIconContainer>
            <SocialTextContainer>
              <SocialText>@smv4sconcelos</SocialText>
              <SocialTextDescription>instagram/profile</SocialTextDescription>
            </SocialTextContainer>
          </SocialItem>
          <SocialItem>
            <SocialIconContainer>
              <SocialIcon src={gmailIcon} />
            </SocialIconContainer>
            <SocialTextContainer>
              <SocialText>smvasconcelos11@gmail.com</SocialText>
              <SocialTextDescription>email/gmail</SocialTextDescription>
            </SocialTextContainer>
          </SocialItem>
          <SocialItem
            onClick={() =>
              window.open("https://www.github.com/smvasconcelos", "_blank")
            }
          >
            <SocialIconContainer>
              <SocialIcon src={githubIcon} />
            </SocialIconContainer>
            <SocialTextContainer>
              <SocialText>github.com/smvasconcelos</SocialText>
              <SocialTextDescription>github/profile</SocialTextDescription>
            </SocialTextContainer>
          </SocialItem>
        </SocialContainer>
      </>
    </Container>
  );
};

const MobileSideBar: React.FC<{
  params: {
    open: any;
    setOpen: any;
  };
}> = ({ ...params }) => {
  return <></>;
};

const Dashboard: React.FC<{
  mobile: boolean;
  open: boolean;
  setOpen: any;
}> = ({ open, setOpen, mobile }) => {
  return mobile ? <MobileSideBar params={{ open, setOpen }} /> : <SideBar />;
};

export default Dashboard;
