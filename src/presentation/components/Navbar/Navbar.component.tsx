import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  LanguageContainer,
  LogoClosure,
  LogoContainer,
  LogoName,
  NavbarContainer,
  NavbarItem
} from './Navbar.styles';
import { useTranslation } from 'react-i18next';
import { Icons } from 'shared/assets/icons';
import i18next from 'i18next';

export const routesHashes = ['#start', '#about', '#experience'];

export function Navbar(): JSX.Element {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation('global');

  useEffect(() => {
    function handleWheel(event: WheelEvent): void {
      const deltaY = event.deltaY;
      const hash = window.location.hash;
      const index =
        hash === '' ? 0 : routesHashes.findIndex(item => item === hash);

      if (deltaY > 0 && index + 1 < routesHashes.length) {
        setTimeout(() => {
          navigate(`${routesHashes[index + 1]}`);
        }, 100);
      } else if (deltaY < 0 && index - 1 >= 0) {
        setTimeout(() => {
          navigate(`${routesHashes[index - 1]}`);
        }, 100);
      }
    }

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Container>
      <LogoContainer>
        <LogoClosure>&lt;</LogoClosure>

        <LogoName>S.M.V</LogoName>

        <LogoClosure>/&gt;</LogoClosure>
      </LogoContainer>

      <NavbarContainer>
        <NavbarItem
          href='#start'
          $active={hash === '#start' || hash === ''}
        >
          index
        </NavbarItem>

        <NavbarItem
          href='#about'
          $active={hash === '#about'}
        >
          {t('about')}
        </NavbarItem>

        <NavbarItem
          $active={hash === '#experience'}
          href='#experience'
        >
          {t('carrear')}
        </NavbarItem>

        <NavbarItem
          target='_blank'
          href={`https://smvasconcelos.github.io/devlogs/${i18next.language ?? 'en'}/`}
        >
          BLOG
        </NavbarItem>

        <LanguageContainer>
          {i18next.language === 'pt' ? (
            <Icons.USFlag
              onClick={() => {
                i18next.changeLanguage('en');
              }}
            />
          ) : (
            <Icons.BrazilFlag
              onClick={() => {
                i18next.changeLanguage('pt');
              }}
            />
          )}
        </LanguageContainer>
      </NavbarContainer>
    </Container>
  );
}
