import * as React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {styled} from "@mui/system";
import {useDispatch, useSelector} from "react-redux";
import {selectSortOptions, sortBy} from "../../store/slices/filterSlice";
import {SORT} from "constants";
import {StyledCard} from "components";

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
    <StyledCard title={'Sort By'} sx={{p: 2}}>
      <FormControl>
        <RadioGroup
          defaultValue={SORT.OLD_TO_NEW}
          name="sort-by-radio-group"
          value={sortKey}
          onChange={onSortRadioChange}
        >
          <FormControlLabel value={SORT.OLD_TO_NEW} control={<StyledRadio size="small"/>} label="Old to new"/>
          <FormControlLabel value={SORT.NEW_TO_OLD} control={<StyledRadio size="small"/>} label="New to old"/>
          <FormControlLabel value={SORT.HIGH_TO_LOW} control={<StyledRadio size="small"/>} label="Price high to low"/>
          <FormControlLabel value={SORT.LOW_TO_HIGH} control={<StyledRadio size="small"/>} label="Price low to high"/>
        </RadioGroup>
      </FormControl>
    </StyledCard>
  );
}