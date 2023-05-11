import * as React from 'react';
import {Box, Card, IconButton, Stack, Tooltip, Typography} from "@mui/material";
import {styled} from "@mui/system";
import {alpha} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase, selectBasket} from "../../store/slices/basketSlice";
import {Iconify} from "../../components";

const StyledCard = styled(Card)(() => ({
  padding: 20,
  borderRadius: 8,
  boxShadow: `0 0 2px 0 ${alpha('#9e9e9e', 0.2)}, 0 12px 24px -4px ${alpha('#9e9e9e', 0.12)}`
}));

export default function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);


  console.log('basket', basket);

  if (basket.products.length === 0) {
    return null;
  }

  return (
    <StyledCard>
      {basket.products.map((product, index) => (
        <Stack key={index} sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
          }}>
            <Typography>{product.name}</Typography>
            <Typography>{(product.price) * (product.quantity)}</Typography>
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
      ))}
    </StyledCard>
  );
}