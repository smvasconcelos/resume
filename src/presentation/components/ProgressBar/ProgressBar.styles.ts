import styled from 'styled-components';
import { ProgressBarStylesType } from './ProgressBar.types';

export const TopProgress = styled.div<ProgressBarStylesType>`
  height: ${({ $percentage }) => $percentage === 100 ? "1.5rem" : "1rem"};
  background-color: ${({ theme }) => theme.brandTertiaryColor};
  width: ${({ $percentage }) => $percentage}%;
  border-radius:  ${({ $percentage }) => $percentage === 100 ? 0 : 5}px;
  transition: all 250ms ease-in-out;
  position: fixed;
  top: 0;
  left: -10px;
`;

export const BottomProgress = styled.div<ProgressBarStylesType>`
  height: ${({ $percentage }) => $percentage === 100 ? "1.5rem" : "1rem"};
  background-color: ${({ theme }) => theme.brandTertiaryColor};
  width: ${({ $percentage }) => $percentage}%;
  border-radius:  ${({ $percentage }) => $percentage === 100 ? 0 : 5}px;
  transition: all 250ms ease-in-out;
  position: fixed;
  bottom: 0;
  right: -10px;
`;

export const RightProgress = styled.div<ProgressBarStylesType>`
  width: ${({ $percentage }) => $percentage === 100 ? "1.5rem" : "1rem"};
  background-color: ${({ theme }) => theme.brandTertiaryColor};
  height: ${({ $percentage }) => $percentage}%;
  border-radius:  ${({ $percentage }) => $percentage === 100 ? 0 : 5}px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: all 250ms ease-in-out;
  position: fixed;
  top: 0;
  right: 0;
`;

export const LeftProgress = styled.div<ProgressBarStylesType>`
  width:  ${({ $percentage }) => $percentage === 100 ? "1.5rem" : "1rem"};
  background-color: ${({ theme }) => theme.brandTertiaryColor};
  height: ${({ $percentage }) => $percentage}%;
  border-radius:  ${({ $percentage }) => $percentage === 100 ? 0 : 5}px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transition: all 250ms ease-in-out;
  position: fixed;
  bottom: 0;
  left: 0;
`;
