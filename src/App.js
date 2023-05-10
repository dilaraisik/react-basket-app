import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';

// routes
import Router from './routes';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import store from './store/store';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      </ReduxProvider>
    </HelmetProvider>

  );
}

export default App;
