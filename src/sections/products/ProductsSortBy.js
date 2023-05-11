import * as React from 'react';
import {Card, FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {styled} from "@mui/system";
import {alpha} from "@mui/material/styles";

const StyledCard = styled(Card)(() => ({
  padding: 20,
  borderRadius: 8,
  boxShadow: `0 0 2px 0 ${alpha('#9e9e9e', 0.2)}, 0 12px 24px -4px ${alpha('#9e9e9e', 0.12)}`
}));

const StyledRadio = styled(Radio)(() => ({
  '&.Mui-checked': {
    color: '#f76b07',
  },
}));

export default function ProductsSortBy() {

  return (
    <StyledCard>
      <FormControl>
        <RadioGroup
          defaultValue="oldToNew"
          name="sort-by-radio-group"
        >
          <FormControlLabel value="oldToNew" control={<StyledRadio size="small" />} label="Old to new"/>
          <FormControlLabel value="newToOld" control={<StyledRadio size="small" />} label="New to old"/>
          <FormControlLabel value="priceHighToLow" control={<StyledRadio size="small" />} label="Price high to low"/>
          <FormControlLabel value="priceLowToHigh" control={<StyledRadio size="small" />} label="Price low to high"/>
        </RadioGroup>
      </FormControl>
    </StyledCard>
  );
}