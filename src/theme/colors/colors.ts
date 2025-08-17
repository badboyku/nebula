// This is the full range of colors, in alignment with what is in Nebula.
// Link to Nebula color schema: https://zeroheight.com/5288cf391/v/latest/p/484986-color
import black from './black';
import blue from './blue';
import coolGray from './coolGray';
import green from './green';
import navy from './navy';
import purple from './purple';
import red from './red';
import warmGray from './warmGray';
import white from './white';
import yellow from './yellow';
import type { Black } from './black';
import type { Blue } from './blue';
import type { CoolGray } from './coolGray';
import type { Green } from './green';
import type { Navy } from './navy';
import type { Purple } from './purple';
import type { Red } from './red';
import type { WarmGray } from './warmGray';
import type { White } from './white';
import type { Yellow } from './yellow';

export type Colors = {
  black: Black;
  blue: Blue;
  coolGray: CoolGray;
  green: Green;
  navy: Navy;
  purple: Purple;
  red: Red;
  warmGray: WarmGray;
  white: White;
  yellow: Yellow;
};

const colors: Colors = {
  black,
  blue,
  coolGray,
  green,
  navy,
  purple,
  red,
  warmGray,
  white,
  yellow,
};

export default colors;
