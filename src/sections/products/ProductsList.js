import * as React from 'react';
import {useCallback, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import services from "services";
import {Button, Card, CardActionArea, CardActions, CardContent, Pagination, Typography, Stack} from "@mui/material";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {calculatePageCount, paginate} from "utils/pagination";
import {PAGINATION} from "constants";
import {set} from 'store/slices/productSlice';
import {useDispatch} from 'react-redux';
import {styled} from "@mui/system";
import {alpha} from "@mui/material/styles";

const StyledCard = styled(Card)(() => ({
  borderRadius: 8,
  boxShadow: `0 0 2px 0 ${alpha('#9e9e9e', 0.2)}, 0 12px 24px -4px ${alpha('#9e9e9e', 0.12)}`
}));

export default function ProductsList() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

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
        {paginate(data, PAGINATION.ROWS_PER_PAGE, page - 1).map((product) => (
          <Grid key={data.id} item xs={3}>
            <StyledCard>
              <CardActionArea>
                <LazyLoadImage
                  placeholderSrc={product.image}
                  effect="blur"
                  style={{height: 140, objectFit: 'cover'}}
                  src={product.image}
                />
                <CardContent>
                  <Typography variant="body2" gutterBottom color="text">
                    {product.name}
                  </Typography>
                  <Typography color="primary" variant="subtitle1" sx={{fontWeight: "bold"}} component="div">
                    {product.price} ₺
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button fullWidth={true} size="small" color="primary" variant={"outlined"}>
                  Add To Cart
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Stack justifyContent="center">
            <Pagination count={calculatePageCount(PAGINATION.ROWS_PER_PAGE, data.length)}
                        sx={{mt: 4, justifyContent: 'center', display: 'flex'}}
                        page={page}
                        variant="outlined"
                        color="primary"
                        onChange={handleChange} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}