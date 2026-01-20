import { Container } from './ProgressBar.styles';
import { IProgressBarProps } from './ProgressBar.types';

export function ProgressBar({
  percentage,
  ...rest
}: IProgressBarProps): React.JSX.Element {
  return (
    <Container
      {...rest}
      $percentage={percentage ?? 0}
    />
  );
}
