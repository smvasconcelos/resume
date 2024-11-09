import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.brandPrimaryColor};
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  padding: 2rem;
  background: linear-gradient(270deg, #0e141b 0%, #221c4a 54%, #121724 100%);
`;
