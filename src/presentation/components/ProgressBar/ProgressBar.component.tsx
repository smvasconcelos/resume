import {
  BottomProgress,
  LeftProgress,
  RightProgress,
  TopProgress
} from './ProgressBar.styles';
import { IProgressBarProps } from './ProgressBar.types';

export function ProgressBar({
  percentage,
  ...rest
}: IProgressBarProps): React.JSX.Element {
  return (
    <>
      <TopProgress
        {...rest}
        $percentage={percentage ?? 0}
      />

      <RightProgress
        {...rest}
        $percentage={percentage ?? 0}
      />

      <BottomProgress
        {...rest}
        $percentage={percentage ?? 0}
      />

      <LeftProgress
        {...rest}
        $percentage={percentage ?? 0}
      />
    </>
  );
}
