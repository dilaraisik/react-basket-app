import {Box, Grid} from "@mui/material";
import {Helmet} from "react-helmet-async";
import {ProductCard} from "sections/product-detail";
import {Basket, TotalPrice} from "sections/shared";
export default function ProductDetail() {

  return (
    <Box sx={{flexGrow: 1}}>
      <Helmet>
        <title> Product Detail </title>
      </Helmet>

      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} md={3} >
          <Basket />
          <TotalPrice />
        </Grid>
        </Grid>

    </Box>
  );
}
