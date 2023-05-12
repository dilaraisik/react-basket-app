import {Box} from "@mui/material";
import {Helmet} from "react-helmet-async";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectProducts} from "../../store/slices/productSlice";

export default function ProductDetail() {
  const {id} = useParams();
  const products = useSelector(selectProducts);

  console.log('products', products);

  const product = products.find((p) => p.id === id);

  return (
    <Box sx={{flexGrow: 1}}>
      <Helmet>
        <title> Product Detail </title>
      </Helmet>

      <p>{product.name}</p>
    </Box>
  );
}
