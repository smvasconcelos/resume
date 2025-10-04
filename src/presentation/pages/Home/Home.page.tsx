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

  const implementations: IImplementations[] = [
    {
      title: t('nestedArticleTitle'),
      description: t('nestedArticleSummary'),
      codeString: `export type NestedKeysType<T, S extends string> = T extends object
      ? S extends \`$\{infer K1\}.\${infer K2\}\`
        ? K1 extends keyof T
          ? T[K1] extends object
            ? \`$\{K1\}.\$\{NestedKeysType<T[K1], K2>\}\`
            : keyof T \& string
          : keyof T \& string
        : keyof T \& string
      : '';`
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

        <AnimatePresence>
          {percentageIndex === 4 && (
            <ImplementationsContainer $active={implementationVisible !== -1}>
              {implementations.map((project, idx) => {
                return (
                  <AnimatePresence
                    key={`animate-${implementationVisible}-${idx}`}
                  >
                    <ImplementationContainer
                      {...animations.popFadeInOut}
                      $active={implementationVisible === idx}
                    >
                      <ProjectTitle>{project.title}</ProjectTitle>

                      <ProjectContent>{project.description}</ProjectContent>

                      {implementationVisible === idx && (
                        <SyntaxHighlight codeString={project.codeString} />
                      )}

                      <ButtonContainer>
                        <PreviewButton
                          onClick={() => {
                            if (implementationVisible === idx) {
                              setImplementationVisible(-1);
                              return;
                            }

                            setImplementationVisible(idx);
                          }}
                        >
                          {implementationVisible === idx ? 'Close' : 'Preview'}
                        </PreviewButton>
                      </ButtonContainer>
                    </ImplementationContainer>
                  </AnimatePresence>
                );
              })}
            </ImplementationsContainer>
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
