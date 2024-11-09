import { createGlobalStyle } from 'styled-components';
import './App.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    /* Width */
    &::-webkit-scrollbar {
        width: 0.3rem;
        height: 0.3rem;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.brandPrimaryColor};
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.brandTertiaryColor};
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    }


    @media screen and (min-width: 1335px) {
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }

  html, body, #root {
    scroll-behavior: smooth;

    height: 100vh;

    /* 1920px and UP - Full HD */
    /* stylelint-disable-next-line declaration-property-unit-allowed-list */
    font-size: 10px;

    /* 1680px */
    @media screen and (max-width: 1680px) {
      /* stylelint-disable-next-line declaration-property-unit-allowed-list */
      font-size: 10px;
    }

    /* 1366px and Below - HD */
    @media screen and (max-width: 1366px) {
      /* stylelint-disable-next-line declaration-property-unit-allowed-list */
      font-size: 10px;
    }
  }
`;

export default GlobalStyles;
