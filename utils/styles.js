import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#fff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '85vh',
  },
  footer: {
    textAlign: 'center',
  },
});

export default useStyles;
