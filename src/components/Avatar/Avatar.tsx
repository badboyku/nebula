import MuiAvatar from '@mui/material/Avatar';
import { useTheme as muiUseTheme } from '@mui/material/styles';
import { getChildren, getFontSizePx, getSizePx } from './utils';
import type { AvatarProps } from './types';

const Avatar = (props: AvatarProps) => {
  const { letters, title, size, sx: sxProp, ...rest } = props;
  const theme = muiUseTheme();
  const sizePx = getSizePx(size);
  const sx = {
    width: sizePx,
    height: sizePx,
    backgroundColor: theme.colors.mint,
    color: theme.colors.spaceBlue,
    fontSize: getFontSizePx(size),
    fontWeight: 500,
    ...sxProp, // Spread in passed prop for overrides.
  };

  return (
    <MuiAvatar title={title || letters} sx={sx} {...rest}>
      {getChildren(props)}
    </MuiAvatar>
  );
};

export default Avatar;
