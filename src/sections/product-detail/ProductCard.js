import * as React from 'react';
import {Box, Button, Stack, Typography} from "@mui/material";
import {Navigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {set} from "../../store/slices/productSlice";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {add} from "../../store/slices/basketSlice";
import {PATH_PAGE} from "../../routes/paths";
import {StyledCard} from "components";
import services from "../../services";

export default function ProductCard() {
  const {id} = useParams();
  const dispatch = useDispatch();

  const {data} = services.useProducts({
    onSuccess: (data) => {
      dispatch(set(data));
    }
  });

  const product = data?.find((p) => p.id === id);

  if (!data || data?.length === 0) {
    return null;
  }

  if (!product) {
    return <Navigate to={PATH_PAGE.page404}/>
  }

  return (
    <StyledCard sx={{p: 2}}>
      <Stack direction={{xs: 'column', md: 'row'}}
             spacing={{xs: 1, sm: 2, md: 4}}>
        <LazyLoadImage
          placeholderSrc={product.image}
          effect="blur"
          wrapperProps={{style: {width: '100%'}}}
          style={{height: 'auto', width: 'auto', objectFit: 'cover'}}
          src={product.image}
        />
        <Box>
          <Typography gutterBottom variant='h5'>{product.name}</Typography>
          <Typography gutterBottom>{product.price}</Typography>
          <Button fullWidth={true} sx={{mb: 2, mt: 2}} size="small" color="primary" variant={"outlined"}
                  onClick={() => dispatch(add(product))}>
            Add To Cart
          </Button>
          <Typography variant='body1'>{product.description}</Typography>
        </Box>
      </Stack>
    </StyledCard>
  );
}