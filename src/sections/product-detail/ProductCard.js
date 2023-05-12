import * as React from 'react';
import {Box, Button, Card, Stack, Typography} from "@mui/material";
import {styled} from "@mui/system";
import {alpha} from "@mui/material/styles";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "../../store/slices/productSlice";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {add} from "../../store/slices/basketSlice";

const StyledCard = styled(Card)(() => ({
  padding: 20,
  borderRadius: 8,
  boxShadow: `0 0 2px 0 ${alpha('#9e9e9e', 0.2)}, 0 12px 24px -4px ${alpha('#9e9e9e', 0.12)}`
}));

export default function ProductCard() {
  const {id} = useParams();
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  const product = products.find((p) => p.id === id);

  return (
    <StyledCard>
      <Stack direction={{ xs: 'column', md: 'row' }}
             spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Box>
          <LazyLoadImage
            placeholderSrc={product.image}
            effect="blur"
            style={{height: '100%', objectFit: 'cover'}}
            src={product.image}
          />
        </Box>
        <Box>
          <Typography gutterBottom variant='h5'>{product.name}</Typography>
          <Typography gutterBottom>{product.price}</Typography>
          <Button fullWidth={true} sx={{mb: 2, mt: 2}} size="small" color="primary" variant={"outlined"}
                  onClick={() => dispatch(add(product))} >
            Add To Cart
          </Button>
          <Typography variant='body1'>{product.description}</Typography>
        </Box>
      </Stack>
    </StyledCard>
  );
}