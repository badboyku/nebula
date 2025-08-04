import MuiButton from '@mui/material/Button';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonProps = { label?: string } & MuiButtonProps;

const Button = (props: ButtonProps) => {
  const { label = 'Button', ...rest } = props;

  return <MuiButton {...rest}>{label}</MuiButton>;
};

export default Button;
