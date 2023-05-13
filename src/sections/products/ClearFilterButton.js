import * as React from 'react';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {hasAppliedFilters, clear} from "../../store/slices/filterSlice";

export default function ClearFilterButton() {
  const dispatch = useDispatch();
  const hasFilters = useSelector(hasAppliedFilters);

  if(!hasFilters){
    return null;
  }

  function clearFilters() {
    dispatch(clear());
  }

  return (
    <Button sx={{mb: 1}} fullWidth variant='outlined' onClick={clearFilters}>Clear Filters</Button>
  );
}