import MuiGlobalStyles from '@mui/material/GlobalStyles';
import MuiScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import ZegoTheme from '../ZegoTheme';
import type { Theme as MuiTheme } from '@mui/material/styles';
import type { Interpolation } from '@mui/styled-engine';
import type { ReactNode } from 'react';

export const GlobalStylesDefault = { body: { margin: 0, padding: 0 } };
export const ThemeDefault = ZegoTheme;

export type ThemeProviderProps = {
  children: ReactNode;
  globalStyles?: Interpolation<MuiTheme>;
  theme?: MuiTheme;
};

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, globalStyles = GlobalStylesDefault, theme = ThemeDefault } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <MuiScopedCssBaseline>
        <MuiGlobalStyles styles={globalStyles} />
        {children}
      </MuiScopedCssBaseline>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
