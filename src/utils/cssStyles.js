import { alpha } from '@mui/material/styles';

export function bgBlur(props) {
  const color = props?.color || '#000000';
  const blur = props?.blur || 6;
  const opacity = props?.opacity || 0.8;
  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity),
  };
}

export const displayHeader = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

export const justifyBetweenHeader = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'justify-between',
  flexWrap: 'nowrap'
};

export const hiddenSmallScreen = {
  display: {xs: 'none', md: 'flex'}
};

export const alignItemsCenter = {
  display: 'flex',
  alignItems: 'center'
};
