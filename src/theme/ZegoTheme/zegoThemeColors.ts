import blue from '../colors/blue';
import common from '../colors/common';
import coolGray from '../colors/coolGray';
import green from '../colors/green';
import navy from '../colors/navy';
import purple from '../colors/purple';
import red from '../colors/red';
import warmGray from '../colors/warmGray';
import yellow from '../colors/yellow';

const zegoThemeColors = {
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

  // Common
  black: common.black,
  white: common.white,
};

export default zegoThemeColors;
