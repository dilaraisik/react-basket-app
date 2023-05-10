import * as React from 'react';
import {Card, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {styled} from "@mui/system";
import {useSelector} from 'react-redux';
import {selectBrands} from "../../store/slices/productSlice";

const StyledCard = styled(Card)(() => ({
  padding: 20,
  marginTop: 20
}));

export default function ProductsFilterByBrand() {
  const brands = useSelector(selectBrands);

  return (
    <StyledCard>
      <TextField fullWidth size={"small"} id="outlined-basic" label="Search" variant="outlined"/>
      <FormGroup>
        {brands.map((brand, index) => (
          <FormControlLabel key={index} control={<Checkbox/>} label={brand}/>
        ))}
      </FormGroup>
    </StyledCard>
  );
}