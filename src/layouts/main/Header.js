import * as React from 'react';
import {styled} from '@mui/material/styles';
import logo from 'assets/images/basket.png';
import {AppBar, Box, InputAdornment, Stack, TextField, Toolbar, Typography} from "@mui/material";
import Iconify from "components/iconify";
import {alignItemsCenter, bgBlur, displayHeader, hiddenSmallScreen, justifyBetweenHeader} from "utils/cssStyles";
import {PATH_APP} from "../../routes/paths";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {nameFilter, selectNameFilter} from "../../store/slices/filterSlice";
import {calculateTotalPrice} from "../../store/slices/basketSlice";

const Searchbox = styled(TextField)(({theme}) => ({
  '& .MuiOutlinedInput-root': {
    marginLeft: 20,
    [theme.breakpoints.up("xs")]: {
      width: 180
    },
    [theme.breakpoints.up("sm")]: {
      width: 400
    },
    [theme.breakpoints.up("lg")]: {
      width: 500
    },
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

const StyledAppBar = styled(AppBar)(({theme}) => ({
  boxShadow: "none",
  position: 'fixed',
  ...bgBlur({color: '#f9fafb'}),

  [theme.breakpoints.up("sm")]: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 160,
    paddingRight: 160,
  },
}));

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(selectNameFilter);
  const totalPrice = useSelector(calculateTotalPrice);

  return (
    <Box>
      <StyledAppBar>
        <Toolbar>
          <Stack direction='row' sx={{...justifyBetweenHeader}}>
            <Box sx={{...displayHeader}}>
              <img style={{cursor: 'pointer'}} src={logo} height={60} alt='basket-logo'
                   onClick={() => navigate(PATH_APP.products)}/>
              <Searchbox size={"small"} placeholder={'Search'}
                         value={name}
                         onChange={(e) => dispatch(nameFilter(e.target.value))}
                         InputProps={{
                           startAdornment: (
                             <InputAdornment position="start">
                               <Iconify icon="carbon:search" width={20} height={20}/>
                             </InputAdornment>
                           ),
                         }}
              />
            </Box>

            <Box sx={{...alignItemsCenter}}>
              <Iconify sx={{mr: 1, ...hiddenSmallScreen}} icon="material-symbols:shopping-basket-outline" width={20}
                       height={20}/>
              <Typography sx={{mr: 3, ...hiddenSmallScreen}}>{totalPrice}₺</Typography>
              <Iconify icon="mdi:user" width={20} height={20}/>
              <Typography sx={{ml: 1, display: {xs: 'none', md: 'flex'}}}>Dilara</Typography>
            </Box>
          </Stack>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}