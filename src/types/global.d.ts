import type { Black } from '../theme/colors/black';
import type { Blue } from '../theme/colors/blue';
import type { CoolGray } from '../theme/colors/coolGray';
import type { Green } from '../theme/colors/green';
import type { Navy } from '../theme/colors/navy';
import type { Purple } from '../theme/colors/purple';
import type { Red } from '../theme/colors/red';
import type { WarmGray } from '../theme/colors/warmGray';
import type { White } from '../theme/colors/white';
import type { Yellow } from '../theme/colors/yellow';

declare global {
  type ZegoThemeColors = {
    // Navy
    navy: Navy;
    dusk: Navy[400];
    twilight: Navy[1100];
    spaceBlue: Navy[1400];
    midnight: Navy[1500];

    // Green
    green: Green;
    iceberg: Green[300];
    hintMint: Green[600];
    mint: Green[800];
    seeFoam: Green[1200]; // NOTE: "seeFoam" is misspelled in nebula, oh well!!!

    // Yellow
    yellow: Yellow;
    lightGold: Yellow[200];
    gold: Yellow[400];
    solarFlare: Yellow[800];
    goldenYellow: Yellow[1000];

    // Red
    red: Red;
    lightCoral: Red[200];
    mediumCoral: Red[500];
    coral: Red[1000];
    deepRed: Red[1300];

    // Gray
    coolGray: CoolGray;
    warmGray: WarmGray;
    ogGray100: WarmGray[300];
    ogGray200: WarmGray[400];
    ogGray300: WarmGray[500];
    ogGray400: WarmGray[700];
    ogGray500: CoolGray[800];
    ogGray600: CoolGray[1100];

    // Blue
    blue: Blue;
    lightBlue: Blue[200];
    mediumBlue: Blue[400];
    brightBlue: Blue[1000];
    darkBlue: Blue[1300];

    // Purple
    purple: Purple;
    lightPurple: Purple[200];
    mediumPurple: Purple[400];
    brightPurple: Purple[1000];
    darkPurple: Purple[1400];

    // Misc
    black: Black;
    white: White;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: ZegoThemeColors;
  }
  interface ThemeOptions {
    colors: ZegoThemeColors;
  }
}
