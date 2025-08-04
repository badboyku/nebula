/* istanbul ignore file */
// This is the full range of colors, in alignment with what is in Nebula.
// Use this for styling components following Zego branding requirements.
// Link to Nebula color schema: https://zeroheight.com/5288cf391/v/latest/p/484986-color

export type ColorScale = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
  1100: string;
  1200: string;
  1300: string;
  1400: string;
  1500: string;
};
export type NebulaColors = {
  navy: ColorScale;
  green: ColorScale;
  yellow: ColorScale;
  red: ColorScale;
  coolGray: ColorScale;
  warmGray: ColorScale;
  blue: ColorScale;
  purple: ColorScale;
};
export type ZegoThemeColors = {
  // Navy
  navy: ColorScale;
  dusk: string;
  twilight: string;
  spaceBlue: string;
  midnight: string;

  // Green
  green: ColorScale;
  iceberg: string;
  hintMint: string;
  mint: string;
  seeFoam: string;

  // Yellow
  yellow: ColorScale;
  lightGold: string;
  gold: string;
  solarFlare: string;
  goldenYellow: string;

  // Red
  red: ColorScale;
  lightCoral: string;
  mediumCoral: string;
  coral: string;
  deepRed: string;

  // Gray
  coolGray: ColorScale;
  warmGray: ColorScale;
  ogGray100: string;
  ogGray200: string;
  ogGray300: string;
  ogGray400: string;
  ogGray500: string;
  ogGray600: string;

  // Blue
  blue: ColorScale;
  lightBlue: string;
  mediumBlue: string;
  brightBlue: string;
  darkBlue: string;

  // Purple
  purple: ColorScale;
  lightPurple: string;
  mediumPurple: string;
  brightPurple: string;
  darkPurple: string;

  // Misc
  black: string;
  white: string;
};

export const nebulaColors: NebulaColors = {
  navy: {
    100: '#F8F9FF',
    200: '#F0F3FE',
    300: '#D6DCE8',
    400: '#BFC6D6',
    500: '#AAB3C9',
    600: '#838DAF',
    700: '#6875A0',
    800: '#505F93',
    900: '#3B4C86',
    1000: '#2E3E75',
    1100: '#213061',
    1200: '#1E2B57',
    1300: '#15224D',
    1400: '#0C173C',
    1500: '#0E1427',
  },
  green: {
    100: '#F3FBF8',
    200: '#EEF9F5',
    300: '#E6F6F0',
    400: '#DEF2EB',
    500: '#CDECE1',
    600: '#ACE0CD',
    700: '#8BD3B9',
    800: '#59C09B',
    900: '#3BB28E',
    1000: '#26A083',
    1100: '#06937A',
    1200: '#06846E',
    1300: '#057763',
    1400: '#056A58',
    1500: '#045C4D',
  },
  yellow: {
    100: '#FFF7E9',
    200: '#FFF4DF',
    300: '#FEE9BE',
    400: '#FEDE9E',
    500: '#FED37D',
    600: '#FECC68',
    700: '#FDC147',
    800: '#FDB627',
    900: '#FFA91A',
    1000: '#FF9F00',
    1100: '#E68F00',
    1200: '#CC7F00',
    1300: '#B36F00',
    1400: '#995F00',
    1500: '#805000',
  },
  red: {
    100: '#FDEAEF',
    200: '#FCE0E6',
    300: '#FFCED9',
    400: '#FFB0C1',
    500: '#FF9CB2',
    600: '#F5839C',
    700: '#F36E8C',
    800: '#F1597B',
    900: '#F0456B',
    1000: '#EE305A',
    1100: '#DE2952',
    1200: '#D5264F',
    1300: '#C51F47',
    1400: '#9E1939',
    1500: '#851931',
  },
  coolGray: {
    100: '#F3F3F5',
    200: '#E8E8EC',
    300: '#DCDDE2',
    400: '#D0D1D8',
    500: '#B9BBC5',
    600: '#ADAFBB',
    700: '#A1A4B1',
    800: '#8A8D9E',
    900: '#7C7F8E',
    1000: '#6C7282',
    1100: '#5C6274',
    1200: '#535868',
    1300: '#4A4E5D',
    1400: '#373B46',
    1500: '#25272E',
  },
  warmGray: {
    100: '#F8F8F8',
    200: '#F1F1F1',
    300: '#EDEDED',
    400: '#E7E7E7',
    500: '#D4D4D4',
    600: '#C8C8C8',
    700: '#BABABA',
    800: '#A7A7A7',
    900: '#959595',
    1000: '#828282',
    1100: '#707070',
    1200: '#5D5D5D',
    1300: '#4A4A4A',
    1400: '#383838',
    1500: '#252525',
  },
  blue: {
    100: '#F2FAFC',
    200: '#E6F5F9',
    300: '#CCECF4',
    400: '#9AD8E8',
    500: '#81CFE3',
    600: '#67C5DD',
    700: '#4EBBD7',
    800: '#35B1D1',
    900: '#1BA8CC',
    1000: '#029EC6',
    1100: '#0391B8',
    1200: '#05769D',
    1300: '#075A81',
    1400: '#094065',
    1500: '#0B254A',
  },
  purple: {
    100: '#F5F5FA',
    200: '#EBECF5',
    300: '#D8D8EA',
    400: '#BEBFDD',
    500: '#9D9FCC',
    600: '#898BC1',
    700: '#7678B7',
    800: '#6265AD',
    900: '#4F51A2',
    1000: '#3B3E98',
    1100: '#353889',
    1200: '#2F327A',
    1300: '#292B6A',
    1400: '#1D1E4A',
    1500: '#18193D',
  },
};

const zegoThemeColors: ZegoThemeColors = {
  // Navy
  navy: nebulaColors.navy,
  dusk: nebulaColors.navy[400],
  twilight: nebulaColors.navy[1100],
  spaceBlue: nebulaColors.navy[1400],
  midnight: nebulaColors.navy[1500],

  // Green
  green: nebulaColors.green,
  iceberg: nebulaColors.green[300],
  hintMint: nebulaColors.green[600],
  mint: nebulaColors.green[800],
  seeFoam: nebulaColors.green[1200], // NOTE: "seeFoam" is misspelled in nebula, oh well!!!

  // Yellow
  yellow: nebulaColors.yellow,
  lightGold: nebulaColors.yellow[200],
  gold: nebulaColors.yellow[400],
  solarFlare: nebulaColors.yellow[800],
  goldenYellow: nebulaColors.yellow[1000],

  // Red
  red: nebulaColors.red,
  lightCoral: nebulaColors.red[200],
  mediumCoral: nebulaColors.red[500],
  coral: nebulaColors.red[1000],
  deepRed: nebulaColors.red[1300],

  // Gray (aka grey in nebula)
  coolGray: nebulaColors.coolGray,
  warmGray: nebulaColors.warmGray,
  ogGray100: nebulaColors.warmGray[300],
  ogGray200: nebulaColors.warmGray[400],
  ogGray300: nebulaColors.warmGray[500],
  ogGray400: nebulaColors.warmGray[700],
  ogGray500: nebulaColors.coolGray[800],
  ogGray600: nebulaColors.coolGray[1100],

  // Blue
  blue: nebulaColors.blue,
  lightBlue: nebulaColors.blue[200],
  mediumBlue: nebulaColors.blue[400],
  brightBlue: nebulaColors.blue[1000],
  darkBlue: nebulaColors.blue[1300],

  // Purple
  purple: nebulaColors.purple,
  lightPurple: nebulaColors.purple[200],
  mediumPurple: nebulaColors.purple[400],
  brightPurple: nebulaColors.purple[1000],
  darkPurple: nebulaColors.purple[1400],

  // Misc
  black: '#000',
  white: '#FFF',
};

export default zegoThemeColors;
