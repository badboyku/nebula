import type Blue from '../colors/blue';
import type Common from '../colors/common';
import type CoolGray from '../colors/coolGray';
import type Green from '../colors/green';
import type Navy from '../colors/navy';
import type Purple from '../colors/purple';
import type Red from '../colors/red';
import type WarmGray from '../colors/warmGray';
import type Yellow from '../colors/yellow';

declare const zegoThemeColors: {
  // Navy
  navy: Navy;
  dusk: string;
  twilight: string;
  spaceBlue: string;
  midnight: string;

  // Green
  green: Green;
  iceberg: string;
  hintMint: string;
  mint: string;
  seeFoam: string;

  // Yellow
  yellow: Yellow;
  lightGold: string;
  gold: string;
  solarFlare: string;
  goldenYellow: string;

  // Red
  red: Red;
  lightCoral: string;
  mediumCoral: string;
  coral: string;
  deepRed: string;

  // Gray
  coolGray: CoolGray;
  warmGray: WarmGray;
  ogGray100: string;
  ogGray200: string;
  ogGray300: string;
  ogGray400: string;
  ogGray500: string;
  ogGray600: string;

  // Blue
  blue: Blue;
  lightBlue: string;
  mediumBlue: string;
  brightBlue: string;
  darkBlue: string;

  // Purple
  purple: Purple;
  lightPurple: string;
  mediumPurple: string;
  brightPurple: string;
  darkPurple: string;

  // Common
  black: Common.black;
  white: Common.white;
};

export default zegoThemeColors;
