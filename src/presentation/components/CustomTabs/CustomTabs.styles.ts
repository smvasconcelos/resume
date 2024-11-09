import styled, { css } from 'styled-components';
import { CustomTabsStylesType } from './CustomTabs.types';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const ContentContainer = styled(motion.div)`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border-top: 1px solid ${({ theme }) => theme.highLightColor};
  box-shadow: 10px 11px 29px 0px rgba(0, 0, 0, 0.75);
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
  color: ${({ theme }) => theme.brandPrimaryColor};
  transition: font-size 250ms ease;
  padding: 1.6rem;
  transition: background 250ms ease-in-out;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: #5b451e;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.highLightColor};
    `}
`;
