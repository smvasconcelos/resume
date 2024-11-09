import styled from 'styled-components';
import { ProgressBarStylesType } from './ProgressBar.types';

export const Container = styled.div<ProgressBarStylesType>`
  height: 1rem;
  background-color: ${({ theme }) => theme.brandTertiaryColor};
  width: ${({ $percentage }) => $percentage}%;
  border-radius: 5px;
  transition: width 250ms ease-in-out;
`;
