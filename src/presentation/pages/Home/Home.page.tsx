import { routesHashes } from 'presentation/components/Navbar/Navbar.component';
import { ProgressBar } from 'presentation/components/ProgressBar/ProgressBar.component';
import { DefaultTemplate } from 'presentation/template';
import { Trans, useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Icons } from 'shared/assets/icons';

import type { ParseKeys } from 'i18next';
import { CustomTabs } from 'presentation/components/CustomTabs/CustomTabs.component';
import profileImage from 'src/shared/assets/images/me_2.jpg';
import {
  AboutContainer,
  AboutContent,
  AboutContentContainer,
  AboutProfile,
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
  StartContainer
} from './Home.styles';
import { IWorks } from './Home.types';

export function Home(): React.JSX.Element {
  const { hash } = useLocation();
  const { t } = useTranslation('global');

  const percentageIndex =
    hash === '' ? 1 : routesHashes.findIndex(item => item === hash) + 1;

  const works: IWorks[] = [
    {
      tab: t('tecnoJrTab'),
      description: 'tecnoJrDescription',
      title: t('tecnoJr')
    },
    {
      tab: t('softTrendsTab'),
      description: 'softTrendsDescription',
      title: t('softTrends')
    },
    {
      tab: t('vexpensesTab'),
      description: 'vexpensesDescription',
      title: t('vexpenses')
    }
  ];

  return (
    <DefaultTemplate>
      {/* SECTION 1: HERO */}
      <Container
        as='section'
        id='home'
      >
        <StartContainer>
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
      </Container>

      {/* SECTION 2: ABOUT */}
      <Container
        as='section'
        id='about'
      >
        <AboutContainer>
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
      </Container>

      {/* SECTION 3: EXPERIENCE */}
      <Container
        as='section'
        id='experience'
      >
        <CustomTabs tabsLabel={works.map(item => item.tab)}>
          {works.map(item => {
            return (
              <ExperienceContainer key={item.title}>
                <ExperienceTitle>{item.title}</ExperienceTitle>
                <ExperienceContent>
                  <Trans
                    t={t}
                    i18nKey={item.description as ParseKeys}
                    components={{
                      br: <br />,
                      li: <li />,
                      ul: <ul />,
                      strong: <strong />
                    }}
                  />
                </ExperienceContent>
              </ExperienceContainer>
            );
          })}
        </CustomTabs>
      </Container>

      <ProgressBar
        className='progress-bar-absolute'
        percentage={percentageIndex * (100 / routesHashes.length)}
      />
    </DefaultTemplate>
  );
}
