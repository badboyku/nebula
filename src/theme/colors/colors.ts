// This is the full range of colors, in alignment with what is in Nebula.
// Link to Nebula color schema: https://zeroheight.com/5288cf391/v/latest/p/484986-color
import blue from './blue';
import common from './common';
import coolGray from './coolGray';
import green from './green';
import navy from './navy';
import purple from './purple';
import red from './red';
import warmGray from './warmGray';
import yellow from './yellow';
import type { Blue } from './blue';
import type { Black, White } from './common';
import type { CoolGray } from './coolGray';
import type { Green } from './green';
import type { Navy } from './navy';
import type { Purple } from './purple';
import type { Red } from './red';
import type { WarmGray } from './warmGray';
import type { Yellow } from './yellow';

export type Colors = {
  blue: Blue;
  common: { black: Black; white: White };
  coolGray: CoolGray;
  green: Green;
  navy: Navy;
  purple: Purple;
  red: Red;
  warmGray: WarmGray;
  yellow: Yellow;
};

const colors: Colors = { blue, common, coolGray, green, navy, purple, red, warmGray, yellow };

export default colors;
