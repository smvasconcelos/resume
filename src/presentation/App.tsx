import { I18nextProvider } from 'react-i18next';
import GlobalStyles from 'shared/styles/GlobalStyles';
import { crtTheme } from 'shared/styles/themes/crt.theme';
import i18n from 'shared/translations/i18n.config';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Router';

function App() {
  return (
    <>
      <ThemeProvider theme={crtTheme}>
        <GlobalStyles />

        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
