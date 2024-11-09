/* eslint-disable @typescript-eslint/naming-convention */
import { type defaultNS } from 'shared/translations/i18n.config';

import { type resources } from 'shared/translations';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['pt'];
  }
}
