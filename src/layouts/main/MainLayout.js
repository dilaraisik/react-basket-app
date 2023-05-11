import {Outlet, useLocation} from 'react-router-dom';
import {Box} from '@mui/material';
import Header from './Header';

export default function MainLayout() {
  const {pathname} = useLocation();

  const isHome = pathname === '/';

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', height: 1}}>
      <Header/>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!isHome && {
            px: 20,
            py: 10
          }),
        }}
      >
        <Outlet/>
      </Box>
    </Box>
  );
}
