import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Router';
import GlobalStyles from 'shared/styles/GlobalStyles';
import { defaultTheme } from 'shared/styles/themes/default.theme';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/translations/i18n.config';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
