import { makeStyles } from '@material-ui/core/styles';

export const useUserStyles = makeStyles({
  user: {
    alignSelf: 'center'
  },
});

export const useButtonStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));
