import {Box, Grid} from "@mui/material";
import {ProductsFilterByBrand, ProductsFilterByModel, ProductsList, ProductsSortBy} from 'sections/products'
import {Basket, TotalPrice} from "sections/shared";

export default function Products() {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ProductsSortBy/>
          <ProductsFilterByBrand/>
          <ProductsFilterByModel/>
        </Grid>
        <Grid item xs={6}>
          <ProductsList/>
        </Grid>
        <Grid item xs={3}>
          <Basket/>
          <TotalPrice />
        </Grid>
      </Grid>
    </Box>
  );
}
