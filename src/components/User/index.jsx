import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    alignSelf: 'center'
  },
});

export default function User({ userName }) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom>
          The User Page
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h5" >
              {userName}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
