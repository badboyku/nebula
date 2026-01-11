import MuiButton from '@mui/material/Button';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const { label = 'Button', ...rest } = props;

  return <MuiButton {...rest}>{label}</MuiButton>;
};

export default Button;
