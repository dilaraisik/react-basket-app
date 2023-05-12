import * as React from 'react';
import {useState} from 'react';
import {Card, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {styled} from "@mui/system";
import {useDispatch, useSelector} from 'react-redux';
import {selectBrands} from "../../store/slices/productSlice";
import {alpha} from "@mui/material/styles";
import {Scrollbar} from "components";
import {selectBrandFilters, toggleBrandFilter} from "../../store/slices/filterSlice";

const StyledCard = styled(Card)(() => ({
  padding: 20,
  marginTop: 20,
  borderRadius: 8,
  boxShadow: `0 0 2px 0 ${alpha('#9e9e9e', 0.2)}, 0 12px 24px -4px ${alpha('#9e9e9e', 0.12)}`
}));

export default function ProductsFilterByBrand() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const brandFilters = useSelector(selectBrandFilters);

  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState([]);

  const searchItem = async (text) => {
    setSearchValue(text);
    const searchResult = brands.filter((b) => b.toLowerCase().indexOf(text.toLowerCase()) !== -1);
    setSearchData(searchResult);
  };

  const isChecked = (brand) => {
    return brandFilters.includes(brand);
  }

  const onBrandCheckboxChange = (event, brand) => {
    dispatch(toggleBrandFilter(brand));
  };

  return (<StyledCard>
    <TextField fullWidth size={"small"} id="outlined-basic" placeholder="Search" value={searchValue} variant="outlined"
               onChange={(e) => searchItem(e.target.value)}/>
    <Scrollbar style={{maxHeight: 250}} autoHide={true}>
      <FormGroup>
        {(searchValue.length > 0 ? searchData : brands).map((brand, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox size="small" checked={isChecked(brand)} onChange={(e) => onBrandCheckboxChange(e, brand)}/>}
            label={brand}/>
        ))}
      </FormGroup>
    </Scrollbar>
  </StyledCard>);
}