import styled from "styled-components";
import colors from "constants/colors";
import fonts from "constants/fonts";

export const DashContainer = styled.div`
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
  height: auto;

  max-width: 410px;
  min-width: 280px;
  min-height: 100vh;

  background-color: ${colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  -webkit-box-shadow: 10px 7px 13px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 10px 7px 13px 5px rgba(0, 0, 0, 0.1);
  padding-top: 0;
  /* -webkit-box-shadow: 10px 7px 13px 5px rgba(0, 0, 0, 0.42);
  box-shadow: 10px 7px 13px 5px rgba(0, 0, 0, 0.42); */
  /* border: 5px solid ${colors.green}da; */
`;

export const ProfileImage = styled.img`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 10px 7px 13px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 10px 7px 13px 5px rgba(0, 0, 0, 0.2);
`;

export const Profile = styled.figure`
  /* position: absolute; */
  /* top: -1em; */
  width: 100%;
  background-color: ${colors.gray};
  /* position: relative; */
  /* display: inline-block; */
  /* overflow: hidden; */
  padding: 0;
  border-radius: 10px;
  line-height: 0;
  /* &:after {
    content: "";
    position: absolute;
    width: 200%;
    height: 100%;
    left: 0;
    bottom: -91%;
    background: ${colors.gray};
    -webkit-transform: rotate(355deg);
    transform: rotate(355deg);
    border: 5px solid ${colors.green}da;
  } */
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  ${fonts.title};
  color: ${colors.white};
  font-size: 16px;
  @media screen and (min-width: 320px) {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 25px;
  }
  margin: 0;
`;
export const SubTitle = styled.p`
  /* ${fonts.subtitle}; */
  font-weight: lighter;
  margin: 0;
  margin-bottom: 1em;
  color: ${colors.green_lighter};
  font-size: 14px;
  @media screen and (min-width: 320px) {
    font-size: calc(14px + 4 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
`;
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1em 0;
`;

export const InfoTitle = styled.p`
  width: 100%;
  margin: 0;
  ${fonts.title};
  font-weight: normal;
  color: ${colors.white_lighter};
  font-size: 15px;
  @media screen and (min-width: 320px) {
    font-size: calc(15px + 4 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: -0.4em 0;
`;

export const Info = styled.p`
  ${fonts.text};
  margin-right: 2em;
  font-weight: bolder;
  color: ${colors.white_lighter};
  font-size: 10px;
  @media screen and (min-width: 320px) {
    font-size: calc(10px + 2 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 14px;
  }
`;
export const InfoDescription = styled.p`
  /* ${fonts.text}; */
  /* font-weight: lighter; */
  color: ${colors.gray_lighter};
  font-size: 10px;
  @media screen and (min-width: 320px) {
    font-size: calc(10px + 2 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 14px;
  }
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${colors.gray_lighter};
  background-color: ${colors.gray_darker};
  margin: 1em 0;
  /* -webkit-box-shadow: 2px 4px 13px 10px rgba(0, 0, 0, 0.2); */
  /* box-shadow: 2px 4px 13px 10px rgba(0, 0, 0, 0.2); */
  border-radius: 10px;
  align-items: flex-start;
`;

export const SkillItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SkillIcon = styled.img`
  width: 15px;
  height: 15px;
`;

export const SkillInfo = styled.p`
  ${fonts.text};
  font-weight: bolder;
  color: ${colors.white_lighter};
  font-size: 10px;
  @media screen and (min-width: 320px) {
    font-size: calc(10px + 2 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 11px;
  }
  margin-right: 1em;
`;

export const SkillsTitle = styled.p`
  ${fonts.title};
  color: ${colors.white_lighter};
  font-size: 16px;
  @media screen and (min-width: 320px) {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 25px;
  }
  margin: 0;
  margin-bottom: 1em;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const SocialItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1em;
  cursor: pointer;
`;

export const SocialIconContainer = styled.div`
  background-color: ${colors.green};
  border-radius: 50%;
  padding: 1em;
  margin-right: 1em;
  -webkit-box-shadow: 2px 4px 13px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 4px 13px 10px rgba(0, 0, 0, 0.2);
`;

export const SocialIcon = styled.img`
  width: 23px;
  height: 20px;
`;

export const SocialTextContainer = styled.div`
  /* margin-top: 1em; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  cursor: pointer;
`;

export const SocialText = styled.span`
  ${fonts.text};
  font-weight: normal;
  color: ${colors.gray_lighter};
  font-size: 9px;
  @media screen and (min-width: 320px) {
    font-size: calc(9px + 2 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 13px;
  }
`;
export const SocialTextDescription = styled.span`
  ${fonts.text};
  font-weight: normal;
  color: ${colors.green};
  font-size: 8px;
  @media screen and (min-width: 320px) {
    font-size: calc(8px * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 12px;
  }
`;

export const SideBarContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray_darker};
`;
