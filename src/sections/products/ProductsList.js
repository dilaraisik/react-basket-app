import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import services from "services";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Pagination, Typography} from "@mui/material";
import {useState} from "react";
import {calculatePageCount, paginate} from "utils/pagination";
import {PAGINATION} from "constants";

export default function ProductsList() {

  const {data, isLoading, isSuccess} = services.useProducts({});

  const [page, setPage] = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
  };

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
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
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
        <Pagination count={calculatePageCount(PAGINATION.ROWS_PER_PAGE, data.length)} page={page} onChange={handleChange} />
      </Grid>
    </Box>
  );
}