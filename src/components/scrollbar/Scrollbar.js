import PropTypes from 'prop-types';
import SimpleBar from "simplebar-react";
import {styled} from '@mui/material/styles';

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

export default function Scrollbar({children, sx, ...other}) {

  return (
    <RootStyle>
      <SimpleBar timeout={500} sx={sx} {...other}>
        {children}
      </SimpleBar>
    </RootStyle>
  );
}

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};
