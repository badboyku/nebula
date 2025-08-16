import type { ZegoThemeColors } from '../ZegoTheme/ZegoThemeColors';

declare module '@mui/material/styles' {
  interface Theme {
    colors: ZegoThemeColors;
  }
  interface ThemeOptions {
    colors: ZegoThemeColors;
  }
}
