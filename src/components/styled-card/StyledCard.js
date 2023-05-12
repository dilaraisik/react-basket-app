import PropTypes from 'prop-types';
import {Card} from "@mui/material";
import {styled} from "@mui/system";
import {alpha} from "@mui/material/styles";

const CustomCard = styled(Card)(() => ({
  borderRadius: 8,
  boxShadow: `0 0 2px 0 ${alpha('#9e9e9e', 0.2)}, 0 12px 24px -4px ${alpha('#9e9e9e', 0.12)}`
}));

export default function StyledCard({children, sx, ...other}) {
  return (<CustomCard children={children} sx={sx} {...other} />);
}

StyledCard.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.any
};