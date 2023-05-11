import * as React from 'react';
import {Card, FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {styled} from "@mui/system";
import {alpha} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import {selectSortOptions, sortBy} from "../../store/slices/filterSlice";
import {SORT} from "constants";

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
  const dispatch = useDispatch();
  const sortKey = useSelector(selectSortOptions);

  const onSortRadioChange = (event) => {
    dispatch(sortBy(event.target.value));
  };

  return (
    <StyledCard>
      <FormControl>
        <RadioGroup
          defaultValue={SORT.OLD_TO_NEW}
          name="sort-by-radio-group"
          value={sortKey}
          onChange={onSortRadioChange}
        >
          <FormControlLabel value={SORT.OLD_TO_NEW} control={<StyledRadio size="small" />} label="Old to new"/>
          <FormControlLabel value={SORT.NEW_TO_OLD} control={<StyledRadio size="small" />} label="New to old"/>
          <FormControlLabel value={SORT.HIGH_TO_LOW} control={<StyledRadio size="small" />} label="Price high to low"/>
          <FormControlLabel value={SORT.LOW_TO_HIGH} control={<StyledRadio size="small" />} label="Price low to high"/>
        </RadioGroup>
      </FormControl>
    </StyledCard>
  );
}