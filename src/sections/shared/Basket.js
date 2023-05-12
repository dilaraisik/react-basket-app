import * as React from 'react';
import {Box, Divider, IconButton, Stack, Tooltip, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase, selectBasket} from "../../store/slices/basketSlice";
import {Iconify, StyledCard} from "components";

export default function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  if (basket.products.length === 0) {
    return null;
  }

  const lastItemIndex = basket.products.length - 1;

  return (
    <StyledCard sx={{p: 2}}>
      {basket.products.map((product, index) => (
        <>
          <Stack key={index}
                 sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start'
            }}>
              <Typography>{product.name}</Typography>
              <Typography color='primary'>{(product.price) * (product.quantity)}₺</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              '& > *': {
                m: 1,
              },
            }}>
              <Tooltip title="Decrease">
                <IconButton color="primary" onClick={() => dispatch(decrease(product))}>
                  <Iconify icon={'ic:round-minus'} width={24} height={24}/>
                </IconButton>
              </Tooltip>
              <Typography>{product.quantity}</Typography>
              <Tooltip title="Increase">
                <IconButton color="primary" onClick={() => dispatch(increase(product))}>
                  <Iconify icon={'ic:round-plus'} width={24} height={24}/>
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
          {(index !== (lastItemIndex)) && (
            <Divider sx={{mt: 2, mb: 2}} variant="dashed"/>
          )}
        </>
      ))}
    </StyledCard>
  );
}