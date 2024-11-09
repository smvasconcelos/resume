import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { ImplementationsStylesType } from './Home.types';

export const Container = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 0 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  + .progress-bar-absolute {
    position: absolute;
    top: 0;
    left: -10px;
  }
`;

export const StartContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
`;

export const Header = styled.h1`
  width: 90rem;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 7.6rem;

  span {
    background: linear-gradient(
      183.72deg,
      #7614a5 58.19%,
      #617bff 89.6%,
      #e4e4ea 98.86%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: 1360px) {
    width: 100%;
    font-size: 5.4rem;
    line-height: 6.6rem;
  }
`;

export const HeaderContent = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColorDark};
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.6rem;
  text-align: left;
  width: 30%;

  @media only screen and (max-width: 1360px) {
    width: 50%;
    font-size: 1.5rem;
  }
`;

export const HeaderButton = styled(motion.button)`
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  outline: inherit;
  width: fit-content;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.brandSecondaryColor};
  font-size: 2rem;
  padding: 0 4rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  letter-spacing: 3px;
  line-height: 7.6rem;
  margin: 0;

  span {
    opacity: 1;
    animation: blinker 1.3s linear infinite;
    margin-left: 1rem;
    letter-spacing: -5px;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 1360px) {
    font-size: 1.5rem;
  }
`;

export const AboutContainer = styled(motion.div)`
  width: 80%;
  max-width: 100rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #131528;
  gap: 4rem;
  padding: 5rem;
  border-top: 1px solid ${({ theme }) => theme.highLightColor};
  box-shadow: 10px 11px 29px 0px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 1360px) {
    width: 100%;

    h1 {
      font-size: 5.4rem;
    }
  }

  @media only screen and (max-width: 1100px) {
    max-height: 70vh;
    overflow: auto;
    justify-content: flex-start;

    > div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 4rem;
`;

export const AboutProfile = styled.div`
  background-color: ${({ theme }) => theme.highLightColor};
  height: 100%;
  min-width: 30rem;
  min-height: 30rem;
  border-radius: 5px;

  @media only screen and (max-width: 1360px) {
    min-width: 30rem;
    min-height: 20rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const HeaderAbout = styled.h1`
  width: 65%;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 7.6rem;

  span {
    opacity: 1;
    animation: blinker 1.3s linear infinite;
    margin-left: -2rem;
    letter-spacing: -5px;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const ContentAbout = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.6rem;
  text-align: justify;
`;

export const ContentAboutTag = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-size: 2rem;
  line-height: 2.6rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.highLightColor};

  @media only screen and (max-width: 1360px) {
    font-size: 1.5rem;
  }
`;

export const ExperienceContainer = styled.div`
  max-width: 100rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 4rem;
`;

export const ExperienceTitle = styled.h3`
  font-family: ${({ theme }) => theme.primaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-size: 2rem;
  line-height: 2.6rem;
  font-weight: 700;
  text-align: left;
`;

export const ExperienceContent = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColorDark};
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: justify;
  font-weight: 400;
`;

export const ProjectPreview = styled.div`
  width: 100%;
  height: 13.5rem;
  background-color: ${({ theme }) => theme.highLightColor};
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 200rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
  margin: 0 auto;
  padding-bottom: 2rem;

  @media only screen and (max-width: 1360px) {
    width: 100%;
    overflow: auto;
    justify-content: unset;
  }
`;

export const ProjectContainer = styled(motion.div)`
  width: 31.2rem;
  min-width: 31.2rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  border-radius: 5px;
  padding: 2rem;
  background-color: #131528;
  border: 1px solid ${({ theme }) => theme.highLightColor}20;
  border-top: 2px solid ${({ theme }) => theme.highLightColor};
  min-height: 39rem;
  box-shadow: 10px 11px 29px 0px rgba(0, 0, 0, 0.75);
`;

export const ProjectTitle = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
`;

export const ProjectContent = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColorDark};
  font-size: 1.3rem;
  word-break: break-all;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
  gap: 2rem;
`;

export const PreviewButton = styled.a`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.brandPrimaryColor};
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.highLightColor};
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
`;

export const GithubButton = styled.a`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-size: 1.5rem;
  border: 1px solid ${({ theme }) => theme.highLightColor};
  text-align: center;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
`;

export const ImplementationsContainer = styled.div<ImplementationsStylesType>`
  width: 100%;
  max-width: 200rem;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  flex-wrap: wrap;
  margin: 0 auto;

  ${({ $active }) =>
    $active &&
    css`
      > div {
      display: none;
    `}
`;

export const ImplementationCode = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColorDark};
  font-size: 1.3rem;
  text-align: justify;
  font-weight: 400;
`;

export const ImplementationContainer = styled(
  motion.div
)<ImplementationsStylesType>`
  max-width: 40rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  background-color: #131528;
  gap: 4rem;
  padding: 3rem;
  border-top: 1px solid ${({ theme }) => theme.highLightColor};
  box-shadow: 10px 11px 29px 0px rgba(0, 0, 0, 0.75);

  > span:first-of-type {
    text-align: left;
    font-size: 2rem;
  }

  pre {
    overflow: unset !important;
    border-radius: 5px;
    font-size: 1.5rem;
    line-height: 3rem;
    max-height: 30rem;
    overflow-y: scroll !important;

    > code {
      width: 100%;
    }

    > code > span {
      display: block !important;
      width: 100% !important;
    }
  }

  ${({ $active }) =>
    $active &&
    css`
      width: 100%;
      max-width: 100rem;
      margin: 0 auto;
      display: flex !important;
    `}
`;
