import styled from 'styled-components';

export const CopyToClipBoardButton = styled.span`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: ${({ theme }) => theme.highLightColor};
  font-size: 3rem;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
`;
