import * as React from "react";
import {Grid, Skeleton} from '@mui/material';
import {StyledCard} from "../index";

export default function SkeletonProductsList() {
  const skeleton = Array(20).fill('');

  return (
    <>
      <Grid container spacing={2}>
        {skeleton.map((row, index) => (
        <Grid key={index} item xs={12} md={6} lg={3}>
          <StyledCard>
            <Skeleton width="100%" height={250} variant="rectangular" sx={{borderRadius: 2}}/>
          </StyledCard>
        </Grid>
        ))}
      </Grid>
    </>
  );
}
