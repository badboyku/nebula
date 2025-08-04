import { createTheme as muiCreateTheme } from '@mui/material/styles';
import colors from './colors';
import type { Theme as MuiTheme } from '@mui/material/styles';

const ZegoTheme: MuiTheme = muiCreateTheme({
  // breakpoints: {
  //   values: { xs: 0, sm: 600, md: 768, lg: 1024, xl: 1280 },
  // },
  colors,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { margin: 0, padding: 0 },
      },
    },
  },
  palette: {
    primary: { main: colors.midnight, dark: colors.midnight },
    text: { primary: colors.midnight },
  },
  typography: { fontFamily: '"AcuminProRegular","Roboto",cursive,"Helvetica","Arial",sans-serif' },
});

export default ZegoTheme;
