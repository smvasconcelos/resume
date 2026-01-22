/* eslint-disable @typescript-eslint/naming-convention */
import { type crtTheme } from '../styles/themes/crt.theme';

import 'styled-components';

declare module 'styled-components' {
  type ThemeType = typeof crtTheme;

  export interface DefaultTheme extends ThemeType { }
}
