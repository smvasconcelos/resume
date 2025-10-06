import { routesHashes } from 'presentation/components/Navbar/Navbar.component';
import { ProgressBar } from 'presentation/components/ProgressBar/ProgressBar.component';
import { DefaultTemplate } from 'presentation/template';
import { Trans, useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Icons } from 'shared/assets/icons';
import { animations } from 'shared/styles/animations';

import { AnimatePresence } from 'framer-motion';
import { CustomTabs } from 'presentation/components/CustomTabs/CustomTabs.component';
import { SyntaxHighlight } from 'presentation/components/SyntaxHighlight/SyntaxHighlight.component';
import { useEffect, useState } from 'react';
import profileImage from 'src/shared/assets/images/me.jpg';
import {
  AboutContainer,
  AboutContent,
  AboutContentContainer,
  AboutProfile,
  ButtonContainer,
  Container,
  ContentAbout,
  ContentAboutTag,
  ExperienceContainer,
  ExperienceContent,
  ExperienceTitle,
  Header,
  HeaderAbout,
  HeaderButton,
  HeaderContent,
  ImplementationContainer,
  ImplementationsContainer,
  PreviewButton,
  ProjectContent,
  ProjectTitle,
  StartContainer
} from './Home.styles';
import { IImplementations, IWorks } from './Home.types';

export function Home(): JSX.Element {
  const { hash } = useLocation();
  const [implementationVisible, setImplementationVisible] = useState(-1);
  const { t } = useTranslation('global');

  const percentageIndex =
    hash === '' ? 1 : routesHashes.findIndex(item => item === hash) + 1;

  const works: IWorks[] = [
    {
      tab: t('tecnoJrTab'),
      description: t('tecnoJrDescription'),
      title: t('tecnoJr')
    },
    {
      tab: t('softTrendsTab'),
      description: t('softTrendsDescription'),
      title: t('softTrends')
    },
    {
      tab: t('vexpensesTab'),
      description: t('vexpensesDescription'),
      title: t('vexpenses')
    }
  ];

  useEffect(() => {
    setImplementationVisible(-1);
  }, [hash]);

  return (
    <DefaultTemplate>
      <Container>
        <AnimatePresence>
          {percentageIndex === 1 && (
            <StartContainer {...animations.popInFade}>
              <Header>
                {t('fullstackDev')} <br /> <span>{t('transforming')}</span>{' '}
                {t('designsInto')}
              </Header>

              <HeaderContent>{t('implementingRobustSolutions')}</HeaderContent>

              <HeaderButton>
                Ready to code
                <span>___</span>
              </HeaderButton>
            </StartContainer>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {percentageIndex === 2 && (
            <AboutContainer {...animations.popInFade}>
              <HeaderAbout>
                {t('aboutMe')} <span>_</span>
              </HeaderAbout>

              <AboutContentContainer>
                <AboutProfile>
                  <img
                    src={profileImage}
                    alt='Profile Image'
                  />
                </AboutProfile>

                <AboutContent>
                  <ContentAbout>
                    <Trans
                      t={t}
                      i18nKey='aboutMeDescription'
                      components={{ br: <br /> }}
                    />
                  </ContentAbout>

                  <div>
                    <ContentAboutTag>React</ContentAboutTag>
                    <ContentAboutTag>Typescript</ContentAboutTag>
                    <ContentAboutTag>Node</ContentAboutTag>
                    <ContentAboutTag>PHP</ContentAboutTag>
                    <ContentAboutTag>Laravel</ContentAboutTag>
                  </div>

                  <div>
                    <Icons.React />
                    <Icons.Ts />
                    <Icons.Js />
                    <Icons.Html />
                    <Icons.Css />
                    <Icons.NodeJs />
                    <Icons.Php />
                    <Icons.Laravel />
                  </div>
                </AboutContent>
              </AboutContentContainer>
            </AboutContainer>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {percentageIndex === 3 && (
            <CustomTabs tabsLabel={works.map(item => item.tab)}>
              {works.map(item => {
                return (
                  <ExperienceContainer key={item.title}>
                    <ExperienceTitle>{item.title}</ExperienceTitle>
                    <ExperienceContent>{item.description}</ExperienceContent>
                  </ExperienceContainer>
                );
              })}
            </CustomTabs>
          )}
        </AnimatePresence>
      </Container>

      <ProgressBar
        className='progress-bar-absolute'
        percentage={percentageIndex * (100 / routesHashes.length)}
      />
    </DefaultTemplate>
  );
}
