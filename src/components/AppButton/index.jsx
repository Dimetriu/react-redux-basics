import React from 'react';
import { useButtonStyles } from '../../css/components';
import Button from '@material-ui/core/Button';

export default function AppButton({ children, onClick }) {
  const classes = useButtonStyles();

  return (
    <Button
      variant="outlined"
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
