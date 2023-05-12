import * as React from "react";
import {Card, Grid, Skeleton} from '@mui/material';
import {styled} from "@mui/system";
import {alpha} from "@mui/material/styles";

const StyledCard = styled(Card)(() => ({
  borderRadius: 8,
  boxShadow: `0 0 2px 0 ${alpha('#9e9e9e', 0.2)}, 0 12px 24px -4px ${alpha('#9e9e9e', 0.12)}`
}));

export default function SkeletonProductsList() {
  const skeleton = Array(20).fill('');

  return (
    <>
      <Grid container spacing={2}>
        {skeleton.map((row, index) => (
        <Grid key={index} item xs={3}>
          <StyledCard>
            <Skeleton width="100%" height={250} variant="rectangular" sx={{borderRadius: 2}}/>
          </StyledCard>
        </Grid>
        ))}
      </Grid>
    </>
  );
}
