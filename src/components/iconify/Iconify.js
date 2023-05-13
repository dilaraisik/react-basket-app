import PropTypes from 'prop-types';
import {Icon} from '@iconify/react';
import {Box} from "@mui/material";

export default function Iconify({icon, sx, ...other}) {
  return (<Box sx={sx}><Icon icon={icon} {...other} /></Box>);
}

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.any
};