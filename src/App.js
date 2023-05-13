import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import Router from './routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from "./theme";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
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
