import black from '../colors/black';
import blue from '../colors/blue';
import coolGray from '../colors/coolGray';
import green from '../colors/green';
import navy from '../colors/navy';
import purple from '../colors/purple';
import red from '../colors/red';
import warmGray from '../colors/warmGray';
import white from '../colors/white';
import yellow from '../colors/yellow';
import type { Black } from '../colors/black';
import type { Blue } from '../colors/blue';
import type { CoolGray } from '../colors/coolGray';
import type { Green } from '../colors/green';
import type { Navy } from '../colors/navy';
import type { Purple } from '../colors/purple';
import type { Red } from '../colors/red';
import type { WarmGray } from '../colors/warmGray';
import type { White } from '../colors/white';
import type { Yellow } from '../colors/yellow';

export type ZegoThemeColors = {
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

const zegoThemeColors: ZegoThemeColors = {
  // Navy
  navy,
  dusk: navy[400],
  twilight: navy[1100],
  spaceBlue: navy[1400],
  midnight: navy[1500],

  // Green
  green,
  iceberg: green[300],
  hintMint: green[600],
  mint: green[800],
  seeFoam: green[1200], // NOTE: "seeFoam" is misspelled in nebula, oh well!!!

  // Yellow
  yellow,
  lightGold: yellow[200],
  gold: yellow[400],
  solarFlare: yellow[800],
  goldenYellow: yellow[1000],

  // Red
  red,
  lightCoral: red[200],
  mediumCoral: red[500],
  coral: red[1000],
  deepRed: red[1300],

  // Gray (aka grey in nebula)
  coolGray,
  warmGray,
  ogGray100: warmGray[300],
  ogGray200: warmGray[400],
  ogGray300: warmGray[500],
  ogGray400: warmGray[700],
  ogGray500: coolGray[800],
  ogGray600: coolGray[1100],

  // Blue
  blue,
  lightBlue: blue[200],
  mediumBlue: blue[400],
  brightBlue: blue[1000],
  darkBlue: blue[1300],

  // Purple
  purple,
  lightPurple: purple[200],
  mediumPurple: purple[400],
  brightPurple: purple[1000],
  darkPurple: purple[1400],

  // Misc
  black,
  white,
};

export default zegoThemeColors;
