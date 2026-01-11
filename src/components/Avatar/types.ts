import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import type { CSSProperties as MuiCssProperties, Theme as MuiTheme, SxProps as MuiSxProps } from '@mui/material/styles';

export type AvatarProps = {
  /**
   * The letters to show in the avatar.
   */
  letters?: string;

  /**
   * The CSS styles used in the letters. Uses size prop to transform text, due to AcuminPro font has bottom padding.
   * @default {
   *   transform: 'translate(0, 2px)';
   * }
   */
  lettersStyle?: MuiCssProperties;

  /**
   * The title used when hovering over the avatar. Uses letters prop as default.
   */
  title?: string;

  /**
   * The size of the avatar.
   * XL = 280px x 280px;
   * L = 80px x 80px;
   * M = 60px x 60px;
   * S = 45px x 45px;
   * XS = 25px x 25px;
   * @default S
   */
  size?: AvatarSize;

  /**
   * The CSS styles overrides. Uses size prop to set width, height, and font size.
   * @default {
   *   width: 45px;
   *   height: 45px;
   *   backgroundColor: theme.colors.mint;
   *   color: theme.colors.spaceBlue;
   *   fontSize: 18px;
   *   fontWeight: 500;
   * }
   */
  sx?: MuiSxProps<MuiTheme>;
} & MuiAvatarProps;

export type AvatarSize = 'XL' | 'L' | 'M' | 'S' | 'XS';
