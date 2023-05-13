import PropTypes from 'prop-types';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import GlobalStyles from './globalStyles';

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f76b07'
      }
    },
    typography: {
      fontFamily: [
        'Poppins',
      ].join(','),
    }
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
