import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter} from 'react-router-dom';

// routes
import Router from './routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </HelmetProvider>

  );
}

export default App;
