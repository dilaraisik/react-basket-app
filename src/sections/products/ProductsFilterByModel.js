import * as React from 'react';
import {useState} from 'react';
import {Card, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {styled} from "@mui/system";
import {useDispatch, useSelector} from "react-redux";
import {selectModels} from "../../store/slices/productSlice";
import {alpha} from "@mui/material/styles";
import {Scrollbar} from "components";
import {selectModelFilters, toggleModelFilter} from "../../store/slices/filterSlice";

const StyledCard = styled(Card)(() => ({
  padding: 20,
  marginTop: 20,
  borderRadius: 8,
  boxShadow: `0 0 2px 0 ${alpha('#9e9e9e', 0.2)}, 0 12px 24px -4px ${alpha('#9e9e9e', 0.12)}`
}));

export default function ProductsFilterByModel() {
  const dispatch = useDispatch();
  const models = useSelector(selectModels);
  const modelFilters = useSelector(selectModelFilters);

  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState([]);

  const searchItem = async (text) => {
    setSearchValue(text);
    const searchResult = models.filter((b) => b.toLowerCase().indexOf(text.toLowerCase()) !== -1);
    setSearchData(searchResult);
  };

  const isChecked = (model) => {
    return modelFilters.includes(model);
  }

  const onModelCheckboxChange = (event, model) => {
    dispatch(toggleModelFilter(model));
  };

  return (
    <StyledCard>
      <TextField fullWidth size={"small"} id="outlined-basic" label="Search" value={searchValue} variant="outlined"
                 onChange={(e) => searchItem(e.target.value)}/>
      <Scrollbar style={{maxHeight: 250}} autoHide={true}>
        <FormGroup>
          {(searchValue.length > 0 ? searchData : models).map((model, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox size="small" checked={isChecked(model)} onChange={(e) => onModelCheckboxChange(e, model)}/>}
              label={model}/>
          ))}
        </FormGroup>
      </Scrollbar>
    </StyledCard>
  );
}