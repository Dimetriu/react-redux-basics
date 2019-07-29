import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function User({ userName }) {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        The User Page
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" >
            {userName}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
