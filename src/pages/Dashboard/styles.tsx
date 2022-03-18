import styled from "styled-components";
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

export const Content = styled.div``;

export const Article = styled.article`
  padding: 4em;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border-bottom: 10px solid ${colors.divider}; */
  /* max-width: 1360px; */
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
`;

export const ExperienceIcon = styled.img`
  height: 100%;
  min-height: 65px;
  width: 120px;
  margin: 0 1em;
  max-height: 65px;
`;

export const ExperienceTitle = styled.p`
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
`;

