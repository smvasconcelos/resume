import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { CustomTabsStylesType } from './CustomTabs.types';

export const Container = styled.div`
  width: fit-content;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 20vh;
  }
`;

export const ContentContainer = styled(motion.div)`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border-top: 1px solid ${({ theme }) => theme.highLightColor};
  box-shadow: 0px 0px 2px 5px ${({ theme }) => theme.highLightColor};
  background-color: #131528;
`;

export const TabsContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding-left: 2rem;
`;

export const TabItem = styled.span<CustomTabsStylesType>`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.4rem;
  text-align: center;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  color: ${({ theme }) => theme.neutralColorHighlight};
  transition: font-size 250ms ease;
  padding: 1.6rem;
  transition: background 250ms ease-in-out;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: ${({ theme }) => theme.brandSecondaryColorDark};
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.brandPrimaryColor};
    `}

  @media only screen and (max-width: 1368px) {
    font-size: 1.3rem;
    line-height: 2.4rem;
    padding: 1.2rem;
  }

  @media only screen and (max-width: 560px) {
    font-size: 0.9rem;
    line-height: 1rem;
    padding: 0.8rem;
  }
`;
