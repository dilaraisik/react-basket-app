import {Box, Grid, Typography} from "@mui/material";
import {ProductsFilterByBrand, ProductsFilterByModel, ProductsList, ProductsSortBy} from 'sections/products'

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ProductsSortBy />
          <ProductsFilterByBrand />
          <ProductsFilterByModel />
        </Grid>
        <Grid item xs={6}>
          <ProductsList />
        </Grid>
        <Grid item xs={3}>
          <Typography>3</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
