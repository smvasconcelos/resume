import { ReactNode } from 'react';

export type CustomTabsStylesType = {
  active?: boolean;
};

export interface ICustomTabsProps {
  children: ReactNode[];
  tabsLabel: string[];
}
