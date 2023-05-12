import {Helmet} from 'react-helmet-async';
import {Link as RouterLink} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';
import {PageNotFoundIllustration} from 'assets/illustrations';

export default function Page404() {
  return (
    <>
      <Helmet>
        <title> 404 | Page Not Found </title>
      </Helmet>

      <Stack direction='column'
             spacing={4}
             alignItems='center'
             justifyContent='center'>

        <PageNotFoundIllustration
          sx={{
            my: 5,
          }}
        />

        <Typography variant="h4" paragraph>
          Sorry, page not found!
        </Typography>

        <Typography sx={{color: 'text.secondary'}}>
          The page you are looking for was moved, removed, renamed or might never existed.
        </Typography>

        <Button component={RouterLink} to="/" size="large" variant="outlined">
          Go to Home
        </Button>
      </Stack>
    </>
  );
}
