import * as React from 'react';
import {useCallback, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import services from "services";
import {Button, Card, CardActionArea, CardActions, CardContent, Pagination, Typography} from "@mui/material";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {calculatePageCount, paginate} from "utils/pagination";
import {PAGINATION} from "constants";
import {set} from 'store/slices/productSlice';
import {useDispatch} from 'react-redux';

export default function ProductsList() {

  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  const {data, isLoading, isSuccess} = services.useProducts({
    onSuccess: () => {
      dispatch(set(data));
    }
  });

  const handleChange = useCallback((event, page) => {
    setPage(page);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!isSuccess) {
    return <div>Something went wrong</div>
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        {paginate(data, PAGINATION.ROWS_PER_PAGE, page).map((product) => (
          <Grid item xs={3}>
            <Card>
              <CardActionArea>
                <LazyLoadImage
                  placeholderSrc={product.image}
                  effect="blur"
                  style={{height: 140, objectFit: 'cover'}}
                  src={product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Pagination count={calculatePageCount(PAGINATION.ROWS_PER_PAGE, data.length)}
                    page={page}
                    onChange={handleChange} />
      </Grid>
    </Box>
  );
}