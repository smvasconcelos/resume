import i18next from 'i18next';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icons } from 'shared/assets/icons';
import {
  Container,
  LanguageContainer,
  LogoClosure,
  LogoContainer,
  LogoName,
  NavbarContainer,
  NavbarItem
} from './Navbar.styles';

export const routesHashes = ['#home', '#about', '#experience'];

export function Navbar(): JSX.Element {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation('global');
  const rootElement: HTMLDivElement = document.querySelector(
    '#root'
  ) as HTMLDivElement;

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    function observerCallback(entries: IntersectionObserverEntry[]): void {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const hash = window.location.hash.replace('#', '');

          if (id && id !== hash) {
            navigate(`#${id}`, { replace: true });
          }
        }
      });
    }

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [navigate]);

  return (
    <Container>
      <LogoContainer>
        <LogoClosure>&lt;</LogoClosure>

        <LogoName>S.M.V</LogoName>

        <LogoClosure>/&gt;</LogoClosure>
      </LogoContainer>

      <NavbarContainer>
        <NavbarItem
          href='#home'
          $active={hash === '#home' || hash === ''}
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
