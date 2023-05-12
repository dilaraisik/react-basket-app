import * as React from 'react';
import {styled} from '@mui/material/styles';
import logo from 'assets/images/basket.png';
import {AppBar, Box, InputAdornment, TextField, Toolbar, Typography} from "@mui/material";
import Iconify from "components/iconify";
import {bgBlur} from "utils/cssStyles";
import {PATH_APP} from "../../routes/paths";
import {useNavigate} from "react-router-dom";

const Searchbox = styled(TextField)(({theme}) => ({
  '& .MuiOutlinedInput-root': {
    marginLeft: 20,
    width: 500,
    transition: theme.transitions.create(['box-shadow', 'width']),
    '&.Mui-focused fieldset': {
      boxShadow: 1,
    },
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
  '&:hover fieldset': {
    borderColor: `${'#f76b07'} !important`,
  }
}));

const StyledAppBar = styled(AppBar)(() => ({
  boxShadow: "none",
  paddingLeft: 80,
  paddingRight: 80,
  position: 'fixed',
  ...bgBlur({color: '#f9fafb'})
}));

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box sx={{flexGrow: 1}}>
      <StyledAppBar>
        <Toolbar>
          <img style={{cursor: 'pointer'}} src={logo} height={60} alt='basket-logo' onClick={() => navigate(PATH_APP.products)}/>
          <Searchbox size={"small"} placeholder={'Search'}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <Iconify icon="carbon:search" width={20} height={20}/>
                         </InputAdornment>
                       ),
                     }}/>
          <Box sx={{flexGrow: 1}}/>
          <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            <Iconify icon="mdi:user" width={20} height={20}/>
            <Typography sx={{ml: 1}}>Dilara</Typography>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}