import {Outlet} from 'react-router-dom';
import {Box} from '@mui/material';

export default function ErrorLayout() {

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', height: 1}}>
      <Box component="error"
           sx={{
             flexGrow: 1
           }}>
        <Outlet/>
      </Box>
    </Box>
  );
}
