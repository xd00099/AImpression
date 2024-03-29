import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    margin: '0 0 30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    position: 'sticky',
    top: '0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0 0',
      minHeight: '40px'
    },
    backgroundColor: 'rgba(255, 255, 255, .95)',
    [theme.breakpoints.up('md')]: {
      maxHeight: '10vh'
    },
  },
  heading: {
    fontFamily: "Chalkduster, fantasy",
    fontSize: '2em',
    fontWeight: 1000,
    color: "#1DA1F2",
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
      padding: '0'
    },
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em'
    },
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      fontSize: '0.8em'
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: '10px',
    color: 'black',
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
