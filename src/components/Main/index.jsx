import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useUserStyles } from '../../css/components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import AppButton from '../AppButton';

export default function Main({ children, onClick }) {
  const classes = useUserStyles();

  return (
    <section className={classes.user}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h4">The Main Page</Typography>
        <AppButton onClick={onClick}>
          Button
        </AppButton>
        {children}
      </Container>
    </section>
  );
}

