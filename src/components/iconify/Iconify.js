import PropTypes from 'prop-types';
import {Icon} from '@iconify/react';

export default function Iconify({icon, ...other}) {
  return (<Icon icon={icon} {...other} />);
}

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};