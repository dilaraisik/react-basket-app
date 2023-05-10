import * as React from 'react';
import {Card, FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: 20
  },
}));

export default function ProductsSortBy() {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <FormControl>
        <RadioGroup
          defaultValue="oldToNew"
          name="sort-by-radio-group"
        >
          <FormControlLabel value="oldToNew" control={<Radio/>} label="Old to new"/>
          <FormControlLabel value="newToOld" control={<Radio/>} label="New to old"/>
          <FormControlLabel value="priceHighToLow" control={<Radio/>} label="Price high to low"/>
          <FormControlLabel value="priceLowToHigh" control={<Radio/>} label="Price low to high"/>
        </RadioGroup>
      </FormControl>
    </Card>
  );
}