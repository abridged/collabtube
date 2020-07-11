import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
    width: '100vw'
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function LoadingOverlay({open, progress}) {
    // console.log('progress', progress)
  const classes = useStyles();

  const [_open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!_open);
  };

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
          <div className="w-full text-center">
        <CircularProgress color="primary" size="6rem" />
        <BorderLinearProgress variant="determinate" value={progress} />
        </div>
      </Backdrop>
    </div>
  );
}