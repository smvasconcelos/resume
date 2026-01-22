import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.brandPrimaryColor};
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(270deg, #0e141b 0%, #221c4a 54%, #121724 100%);
  position: relative;
  &:before,
  &:after {
    content: "";
    transform: translateZ(0);
    pointer-events: none;
    mix-blend-mode: overlay;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }

  &:before {
    background: repeating-linear-gradient(
      var(--crt-red) 0px,
      var(--crt-green) 2px,
      var(--crt-blue) 4px
    );
  }
  &:after {
    background: repeating-linear-gradient(
      90deg,
      var(--crt-red) 1px,
      var(--crt-green) 2px,
      var(--crt-blue) 3px
    );
  }


  span, p, a, div, section {
    text-shadow: 0 0 0.1em currentColor, 1px 1px rgba(255, 0, 255, .50), -1px -1px rgba(0, 255, 255, .50);
  }

  h1,h2,h3,h4,h5 {
    &, *{
      text-shadow: 0 0 0.18em currentColor, 1px 1px rgba(255, 0, 255, .50), -1px -1px rgba(0, 255, 255, .50);
    }
  }
`;
