import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { ImplementationsStylesType } from './Home.types';

export const Container = styled(motion.div)`
  height: 100vh; /* Required for snapping */
  width: 100%;
  padding: 10vh 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  /* Snap alignment logic */
  scroll-snap-align: center;
  scroll-snap-stop: always;

  @media only screen and (max-width: 810px) {
    width: 100%;
  }

  @media only screen and (max-width: 560px) {
    padding: 0 3vw;
  }
`;

export const StartContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  @media only screen and (max-width: 760px) {
    gap: 2.5rem;
  }

  @media only screen and (max-width: 560px) {
    gap: 1rem;
  }
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

  @media only screen and (max-width: 1368px) {
    width: 100%;
    font-size: 5.4rem;
    line-height: 6.6rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 4.4rem;
    line-height: 4.6rem;
  }

  @media only screen and (max-width: 560px) {
    font-size: 2.2rem;
    line-height: 2.8rem;
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

  @media only screen and (max-width: 1368px) {
    width: 50%;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 560px) {
    width: 100%;
    font-size: 1.2rem;
    line-height: 2rem;
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

  @media only screen and (max-width: 1368px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 1.8rem;
    line-height: 6.6rem;
  }

  @media only screen and (max-width: 560px) {
    padding: 0 2rem;
    line-height: 4.6rem;
    font-size: 1.2rem;
  }
`;

export const AboutContainer = styled(motion.div)`
  width: 100%;
  max-height: 70vh;
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

  @media only screen and (max-width: 1760px) {
    width: 100%;
    max-height: 70vh;
  }

  @media only screen and (max-width: 1100px) {
    overflow: auto;
    justify-content: flex-start;
    max-height: 65vh;

    > div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    margin-top: 110px;
    padding: 2rem;
    width: 100%;
    max-height: 90vh;
    gap: 1rem;
  }

  @media only screen and (max-width: 560px) {
    max-height: 65vh;
  }
`;

export const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 4rem;

  @media only screen and (max-width: 1100px) {
    gap: 0;
  }
`;

export const AboutProfile = styled.div`
  height: auto;
  min-width: 21rem;
  max-height: 31rem;

  img {
    width: 100%;
    border-radius: 10px;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    min-width: 15rem;
    min-height: 20rem;
  }

  @media only screen and (max-width: 1100px) {
    margin-bottom: 1rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }

  svg {
    width: 4rem;
    height: 4rem;
  }

  @media only screen and (max-width: 1368px) {
    > div {
      gap: 1rem;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

export const HeaderAbout = styled.h1`
  width: 65%;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-weight: 700;
  font-size: 5.4rem;
  line-height: 6.6rem;

  span {
    opacity: 1;
    animation: blinker 1.3s linear infinite;
    margin-left: -8px;
    letter-spacing: -5px;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 1368px) {
    font-size: 5.4rem;
    line-height: 6.6rem;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
    font-size: 3.4rem;
    line-height: 4.6rem;
  }

  @media only screen and (max-width: 560px) {
    width: 100%;
    font-size: 2.4rem;
    line-height: 4.6rem;
  }
`;

export const ContentAbout = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2.6rem;
  text-align: justify;
  text-indent: 5rem;

  @media only screen and (max-width: 1368px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  @media only screen and (max-width: 1024px) {
    text-indent: 0;
  }
`;

export const ContentAboutTag = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 5px 12px;
  border-radius: 5px;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.highLightColor};

  @media only screen and (max-width: 1368px) {
    font-size: 1rem;
    line-height: 1rem;
    padding: 1rem;
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

  @media only screen and (max-width: 560px) {
    padding: 2rem;
    max-height: 75vh;
  }
`;

export const ExperienceTitle = styled.h3`
  font-family: ${({ theme }) => theme.primaryFontFamily};
  color: ${({ theme }) => theme.neutralColorHighlight};
  font-size: 2rem;
  line-height: 2.6rem;
  font-weight: 700;
  text-align: left;

  @media only screen and (max-width: 1368px) {
    font-size: 2rem;
    line-height: 1.6rem;
  }

  @media only screen and (max-width: 560px) {
    font-size: 1.3rem;
    line-height: 1rem;
  }
`;

export const ExperienceContent = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColorHighlight}98;
  font-size: 1.3rem;
  line-height: 2.5rem;
  text-align: justify;
  font-weight: 400;

  ul {
    margin-top: 1rem;
    padding-left: 3rem;
  }

  @media only screen and (max-width: 1368px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @media only screen and (max-width: 560px) {
    font-size: 1rem;
    line-height: normal;
    text-align: left;

    ul {
      margin-top: 1rem;
      padding-left: 0;

      li {
        margin-top: 0.5rem;
      }
    }
  }
`;

export const ProjectPreview = styled.div`
  width: 100%;
  height: 13.5rem;
  background-color: ${({ theme }) => theme.highLightColor};

  @media only screen and (max-width: 560px) {
    height: 8rem;
  }
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

  @media only screen and (max-width: 1368px) {
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

  @media only screen and (max-width: 560px) {
    gap: 1rem;
    padding: 1rem;
    width: 20rem;
    min-width: 20rem;
    min-height: 20rem;
  }
`;

export const ProjectTitle = styled.span`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.neutralColor};
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;

  @media only screen and (max-width: 560px) {
    font-size: 1.2rem;
  }
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

  @media only screen and (max-width: 560px) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
  gap: 2rem;

  @media only screen and (max-width: 560px) {
    gap: 1rem;
  }
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

  @media only screen and (max-width: 560px) {
    font-size: 1rem;
  }
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

  @media only screen and (max-width: 560px) {
    font-size: 1rem;
  }
`;

export const ImplementationsContainer = styled.div<ImplementationsStylesType>`
  width: 100%;
  max-width: 200rem;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  flex-wrap: wrap;
  margin: 0 auto;
  z-index: 9;

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
) <ImplementationsStylesType>`
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

  @media only screen and (max-width: 560px) {
    > span:first-of-type {
      text-align: left;
      font-size: 1.3rem;
    }

    pre {
      overflow: unset !important;
      border-radius: 5px;
      font-size: 1.2rem;
      line-height: 1.2rem;
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
  }

  ${({ $active }) =>
    $active &&
    css`
      width: 100%;
      max-width: 100rem;
      margin: 0 auto;
      display: flex !important;
    `}

  @media only screen and (max-width: 560px) {
    gap: 1rem;
    padding: 1.5rem;
  }
`;
