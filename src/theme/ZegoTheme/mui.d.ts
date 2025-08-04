import type { ZegoThemeColors } from './colors';

declare module '@mui/material/styles' {
  interface Theme {
    colors: ZegoThemeColors;
  }
  interface ThemeOptions {
    colors: ZegoThemeColors;
  }
}
