import {Box, Grid} from "@mui/material";
import {Helmet} from "react-helmet-async";
import {ProductCard} from "sections/product-detail";
import {Basket} from "sections/shared";
export default function ProductDetail() {

  return (
    <Box sx={{flexGrow: 1}}>
      <Helmet>
        <title> Product Detail </title>
      </Helmet>

      <Grid container spacing={2}>
        <Grid item xs={9}>
          <ProductCard />
        </Grid>
        <Grid item xs={3}>
          <Basket />
        </Grid>
        </Grid>

    </Box>
  );
}
