import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  title: {},
}));

const Example = (props) => {
  const classes = useStyles();
  const className = `${classes.root} ${props.className || ''}`;

  return (
    <Box className={className}>
      <Typography className={classes.title}>Hi There</Typography>
    </Box>
  );
};

export default Example;
