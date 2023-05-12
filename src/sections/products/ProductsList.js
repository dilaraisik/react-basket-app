import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import services from "services";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Pagination,
  Stack,
  Typography
} from "@mui/material";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {calculatePageCount, paginate} from "utils/pagination";
import {PAGINATION, SORT} from "constants";
import {set} from 'store/slices/productSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {selectBrandFilters, selectModelFilters, selectSortOptions} from "../../store/slices/filterSlice";
import {add} from "../../store/slices/basketSlice";
import {PATH_APP} from "../../routes/paths";
import {SkeletonProductsList, StyledCard} from "components";

export default function ProductsList() {
  const dispatch = useDispatch();
  const brandFilters = useSelector(selectBrandFilters);
  const modelFilters = useSelector(selectModelFilters);
  const sortKey = useSelector(selectSortOptions);

  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const {data, isLoading, isSuccess} = services.useProducts({
    onSuccess: () => {
      dispatch(set(data));
    }
  });

  const handleData = () => {
    let filtered = data;

    if (brandFilters.length > 0) {
      filtered = filtered.filter((d) => brandFilters.some((b) => d.brand.includes(b)));
    }

    if (modelFilters.length > 0) {
      filtered = filtered.filter((d) => modelFilters.some((b) => d.model.includes(b)));
    }

    if (sortKey.length > 0) {
      switch (sortKey) {
        case SORT.OLD_TO_NEW:
          filtered = filtered.sort((a, b) => {
            const first = new Date(a.createdAt).getTime();
            const second = new Date(b.createdAt).getTime();
            if (first < second) {
              return 1;
            }
            if (first > second) {
              return -1;
            }
            return 0;
          });
          break;
        case SORT.NEW_TO_OLD:
          filtered = filtered.sort((a, b) => {
            const first = new Date(a.createdAt).getTime();
            const second = new Date(b.createdAt).getTime();
            if (first < second) {
              return -1;
            }
            if (first > second) {
              return 1;
            }
            return 0;
          });
          break;
        case SORT.HIGH_TO_LOW:
          filtered = filtered.sort((a, b) => {
            const first = Number(a.price);
            const second = Number(b.price);
            if (first < second) {
              return 1;
            }
            if (first > second) {
              return -1;
            }
            return 0;
          });
          break;
        case SORT.LOW_TO_HIGH:
          filtered = filtered.sort((a, b) => {
            const first = Number(a.price);
            const second = Number(b.price);
            if (first < second) {
              return -1;
            }
            if (first > second) {
              return 1;
            }
            return 0;
          });
          break;
      }
    }

    return filtered;
  }

  useEffect(() => {
    if (sortKey.length > 0 || brandFilters.length > 0 || modelFilters.length > 0) {
      setPage(1);
    }
  }, [sortKey, brandFilters, modelFilters]);

  const handleChange = useCallback((event, page) => {
    setPage(page);
  }, []);

  if (isLoading) {
    return ( <SkeletonProductsList />)
  }

  if (!isSuccess) {
    return <div>Something went wrong</div>
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        {paginate(handleData(), PAGINATION.ROWS_PER_PAGE, page - 1).map((product) => (
          <Grid key={data.id} item xs={3}>
            <StyledCard>
              <CardActionArea onClick={() => navigate(PATH_APP.productDetail(product.id))}>
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
                <Button fullWidth={true} size="small" color="primary" variant={"outlined"}
                        onClick={() => dispatch(add(product))}>
                  Add To Cart
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Stack justifyContent="center">
            <Pagination count={calculatePageCount(PAGINATION.ROWS_PER_PAGE, handleData().length)}
                        sx={{mt: 4, justifyContent: 'center', display: 'flex'}}
                        page={page}
                        variant="outlined"
                        color="primary"
                        onChange={handleChange}/>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}