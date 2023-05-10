import * as React from 'react';
import {Card, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {styled} from "@mui/system";

const StyledCard = styled(Card)(() => ({
  padding: 20,
  marginTop: 20
}));

export default function ProductsFilterByBrand() {

  return (
    <StyledCard>
      <TextField fullWidth size={"small"} id="outlined-basic" label="Search" variant="outlined"/>
      <FormGroup>
        <FormControlLabel control={<Checkbox/>} label="Apple"/>
      </FormGroup>
    </StyledCard>
  );
}