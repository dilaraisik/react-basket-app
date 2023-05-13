import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import Router from './routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { persistor, store } from './store/store';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {GlobalStyles} from "@mui/system";
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#f76b07'
    },
    background: {
      default: "#ff5050"
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  }
});

function App() {
  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <GlobalStyles
                styles={{
                  body: { backgroundColor: "#f9fafb" }
                }}
              />
              <BrowserRouter>
                <Router/>
              </BrowserRouter>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
          </QueryClientProvider>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  );
}

export default App;
