import PropTypes from 'prop-types';
import {Card, Divider, Typography} from "@mui/material";
import {styled} from "@mui/system";
import {alpha} from "@mui/material/styles";

const CustomCard = styled(Card)(() => ({
  borderRadius: 8,
  flexGrow: 1,
  mb: 20,
  boxShadow: `0 0 2px 0 ${alpha('#9e9e9e', 0.2)}, 0 12px 24px -4px ${alpha('#9e9e9e', 0.12)}`
}));

export default function StyledCard({children, title, sx, ...other}) {
  return (
      <CustomCard sx={sx} {...other} >
        {title && (
          <>
            <Typography sx={{mt: 1}} color='text.secondary'>{title}</Typography>
            <Divider sx={{mb: 2}}/>
          </>
        )}
        {children}
      </CustomCard>
  );
}

StyledCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.any
};