import styled, { css } from 'styled-components';
import { NavItemStylesType } from './Navbar.types';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  width: 92%;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-between;
  height: fit-content;
  padding: 1rem;
  transition: all 250ms ease-in-out;
  z-index: 2;

  @media only screen and (max-width: 870px) {
    flex-direction: column;
  }
`;

export const NavbarItem = styled.a<NavItemStylesType>`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.92rem;
  text-align: center;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  color: ${({ theme }) => theme.brandSecondaryColorDark};
  border-bottom: 3px solid transparent;
  transition: font-size 250ms ease;
  padding-bottom: 1rem;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.brandSecondaryColor};
  }

  ${({ $active }) =>
    $active &&
    css`
      font-size: 2rem;
      font-weight: 900;
      line-height: 2.4rem;
      text-align: center;
      color: ${({ theme }) => theme.brandSecondaryColor};
      border-color: ${({ theme }) => theme.highLightColor};
    `}

  @media only screen and (max-width: 560px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: flex-end;
  justify-content: center;

  @media only screen and (max-width: 560px) {
    gap: 0.5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const LogoName = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.84rem;
  text-align: center;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  color: ${({ theme }) => theme.highLightColor};

  @media only screen and (max-width: 560px) {
    font-size: 2.2rem;
    line-height: 1.84rem;
  }
`;

export const LogoClosure = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem;
  text-align: center;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  color: ${({ theme }) => theme.brandSecondaryColor};
`;

export const LanguageContainer = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: scale 100ms ease-in-out;

  &:hover {
    scale: 1.2;
  }

  svg {
    width: 4rem;
    height: 4rem;
  }
`;
