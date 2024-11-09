import { ComponentProps } from 'react';

export interface IProgressBarProps extends ComponentProps<'div'> {
  percentage: number;
}

export type ProgressBarStylesType = {
  $percentage: number;
};
