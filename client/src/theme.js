import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h2: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
  },
});

export default theme;
