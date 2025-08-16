import type ZegoThemeColors from '../ZegoTheme/zegoThemeColors';

declare module '@mui/material/styles' {
  interface Theme {
    colors: ZegoThemeColors;
  }
  interface ThemeOptions {
    colors: ZegoThemeColors;
  }
}
