import * as React from 'react';
import {Button, Card, Stack, Typography} from "@mui/material";
import {styled} from "@mui/system";
import {alpha} from "@mui/material/styles";
import {useSelector} from "react-redux";
import {calculateTotalPrice, selectBasket} from "../../store/slices/basketSlice";

const StyledCard = styled(Card)(() => ({
  padding: 20,
  borderRadius: 8,
  marginTop: 20,
  boxShadow: `0 0 2px 0 ${alpha('#9e9e9e', 0.2)}, 0 12px 24px -4px ${alpha('#9e9e9e', 0.12)}`
}));

export default function TotalPrice() {
  const basket = useSelector(selectBasket);

  const totalPrice = useSelector(calculateTotalPrice);

  if (basket.products.length === 0) {
    return null;
  }

  return (
    <StyledCard>
      <Stack direction='row'
             alignItems='center'
             justifyContent="space-between" >
        <Typography> Total </Typography>
        <Typography variant='subtitle1' sx={{fontWeight: "bold"}} color='primary'>{totalPrice}₺</Typography>
      </Stack>
      <Button fullWidth={true} size="small" variant={"contained"} sx={{color: 'white', mt:2}}>
        Checkout
      </Button>
    </StyledCard>
  );
}