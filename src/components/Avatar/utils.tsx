import type { AvatarProps, AvatarSize } from './types';

const XL: 'XL' = 'XL' as const;
const L: 'L' = 'L' as const;
const M: 'M' = 'M' as const;
const S: 'S' = 'S' as const;
const XS: 'XS' = 'XS' as const;

export const getChildren = (props: AvatarProps) => {
  const { letters, lettersStyle, size, children } = props;

  if (children) {
    return children;
  }
  if (letters) {
    const style = {
      transform: getLettersStyleTransform(size), // Need to transform, due to AcuminPro font has bottom padding.
      ...lettersStyle, // Spread in passed prop for overrides.
    };

    return <span style={style}>{letters}</span>;
  }

  return null;
};

export const getFontSizePx = (size?: AvatarSize) => {
  switch (size) {
    case XL:
      return 120;
    case L:
      return 36;
    case M:
      return 24;
    case S:
      return 18;
    case XS:
      return 12;
    default:
      return 18;
  }
};

export const getLettersStyleTransform = (size?: AvatarSize) => {
  switch (size) {
    case XL:
      return 'translate(0, 16px)';
    case L:
      return 'translate(0, 4px)';
    case M:
      return 'translate(0, 3px)';
    case S:
      return 'translate(0, 2px)';
    case XS:
      return 'translate(0, 1px)';
    default:
      return 'translate(0, 2px)';
  }
};

export const getSizePx = (size?: AvatarSize) => {
  switch (size) {
    case XL:
      return 280;
    case L:
      return 80;
    case M:
      return 60;
    case S:
      return 45;
    case XS:
      return 25;
    default:
      return 45;
  }
};
