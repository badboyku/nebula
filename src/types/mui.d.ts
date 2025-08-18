import type { ZegoThemeColors } from '../theme/ZegoTheme/ZegoThemeColors';

declare module '@mui/material/styles' {
  interface Theme {
    colors: ZegoThemeColors;
  }
  interface ThemeOptions {
    colors: ZegoThemeColors;
  }
}
