import {Box, Grid} from "@mui/material";
import {ProductsFilterByBrand, ProductsFilterByModel, ProductsList, ProductsSortBy} from 'sections/products'
import {Basket, TotalPrice} from "sections/shared";
import {Helmet} from "react-helmet-async";

export default function Products() {
  return (
    <Box sx={{flexGrow: 1}}>
      <Helmet>
        <title> Products </title>
      </Helmet>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={3}>
          <ProductsSortBy/>
          <ProductsFilterByBrand/>
          <ProductsFilterByModel/>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <ProductsList/>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Basket/>
          <TotalPrice />
        </Grid>
      </Grid>
    </Box>
  );
}
