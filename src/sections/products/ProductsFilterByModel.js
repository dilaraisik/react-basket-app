import * as React from 'react';
import {Card, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: 20,
    marginTop: 20
  },
}));

export default function ProductsFilterByModel() {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <TextField fullWidth size={"small"} id="outlined-basic" label="Search" variant="outlined" />
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Iphone 14" />
      </FormGroup>
    </Card>
  );
}