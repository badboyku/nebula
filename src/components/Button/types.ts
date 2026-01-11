import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonProps = {
  /**
   * The label to show on the button.
   */
  label?: string;
} & MuiButtonProps;
