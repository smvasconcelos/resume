import { useState } from 'react';
import {
  Container,
  ContentContainer,
  TabItem,
  TabsContainer
} from './CustomTabs.styles';
import { ICustomTabsProps } from './CustomTabs.types';
import { AnimatePresence, motion } from 'framer-motion';
import { animations } from 'shared/styles/animations';

export const routesHashes = [
  '#start',
  '#about',
  '#experience',
  '#projects',
  '#implementations'
];

export function CustomTabs({
  children,
  tabsLabel
}: ICustomTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(tabsLabel.length - 1);

  if (children.length !== tabsLabel.length) {
    throw Error('Both arrays must have the same size.');
  }

  return (
    <Container>
      <AnimatePresence>
        <motion.div {...animations.popInFade}>
          <TabsContainer>
            {tabsLabel.map((item, idx) => {
              return (
                <TabItem
                  active={activeTab === idx}
                  onClick={() => setActiveTab(idx)}
                  key={`tab-${idx}`}
                >
                  {item}
                </TabItem>
              );
            })}
          </TabsContainer>

          <AnimatePresence key={activeTab}>
            <ContentContainer {...animations.popFadeInOut}>
              {children[activeTab]}
            </ContentContainer>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}
