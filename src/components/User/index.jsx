import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    margin: 'auto'
  },
});

export default function User() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom>
          User Component
        </Typography>
      </Container>
    </section>
  );
}
