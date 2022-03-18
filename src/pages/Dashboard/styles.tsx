import styled, { css } from "styled-components";
import colors from "constants/colors";
import fonts from "constants/fonts";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.white_darker};
  display: flex;
  flex-direction: row;
  /* max-width: 1360px; */
  /* padding-left: 23vw; */
  /* padding-right: 3em; */
`;

export const Content = styled.div`
  @media screen and (max-width: 500px) {
    padding-top: 32%;
  }
`;

export const Article = styled.article`
  padding: 4em;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border-bottom: 10px solid ${colors.divider}; */
  /* max-width: 1360px; */
  @media screen and (max-width: 500px) {
    padding: 1em;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  ${fonts.title};
  color: ${colors.gray_darker};
  font-size: 25px;
  @media screen and (min-width: 320px) {
    font-size: calc(25px + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 40px;
  }
  margin: 0;
`;

export const SubTitle = styled.p`
  /* ${fonts.subtitle}; */
  font-weight: normal;
  font-style: italic;
  margin: 0;
  margin-bottom: 1em;
  color: ${colors.gray_darker};
  font-size: 14px;
  @media screen and (min-width: 320px) {
    font-size: calc(14px + 4 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
`;
export const Text = styled.p`
  ${fonts.text};
  text-align: justify;
  font-weight: normal;
  margin: 0;
  margin-bottom: 1em;
  color: ${colors.gray_darker};
  font-size: 14px;
  @media screen and (min-width: 320px) {
    font-size: calc(14px + 4 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
`;

export const Divider = styled.div`
  margin: 0.5em 0 1em 0;
  height: 15px;
  background-color: ${colors.green};
  width: 100%;
`;

export const ArticleDivider = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${colors.divider};
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

export const ExperienceIcon = styled.img`
  height: 100%;
  min-height: 65px;
  width: 120px;
  margin: 0 1em;
  min-width: 120px;
  @media screen and (max-width: 1100px) {
    min-width: 60px;
  }
  max-height: 65px;
`;

export const ExperienceItem = styled.div`
  margin-bottom: 1em;
`;

export const ExperienceTitle = styled.p<{ hover?: boolean }>`
  text-transform: uppercase;
  ${fonts.title};
  color: ${colors.gray_darker};
  font-size: 20px;
  @media screen and (min-width: 320px) {
    font-size: calc(20px + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 30px;
  }
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  ${(props) =>
    props.hover &&
    css`
      margin-bottom: 1em;
      cursor: pointer;
    `}
`;

export const ExperiencePeriod = styled.span`
  min-width: fit-content;
  padding: 1em;
  background-color: ${colors.divider};
  font-weight: bolder;
  border-radius: 10px;
  text-transform: uppercase;
  ${fonts.title};
  color: ${colors.gray_darker};
  font-size: 15px;
  @media screen and (min-width: 320px) {
    font-size: calc(15px + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
  margin: 0;
  @media screen and (max-width: 500px) {
    /* margin: 1em 0; */
    display: none;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  padding: 1em;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  top: 1em;
  right: 1em;
  /* background-color: ${colors.divider}; */
  @media screen and (max-width: 500px) {
    position: fixed;
    right: 10%;
  }
`;

export const MenuItem = styled.div`
  cursor: pointer;
  background-color: ${colors.green};
  border-radius: 50%;
  padding: 1em;
  margin: 0 1em;
  -webkit-box-shadow: 2px 4px 13px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 4px 13px 10px rgba(0, 0, 0, 0.1);
`;

export const MenuIcon = styled.img`
  width: 23px;
  height: 20px;
`;

export const WorkIcon = styled.img`
  width: 35px;
  height: 30px;
  margin-right: 0.2em;
`;
