import Avatar from './Avatar';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = { component: Avatar } satisfies Meta<typeof Avatar>;
export default meta;

export const DefaultAvatar: StoryObj<typeof meta> = {
  args: {},
};

export const LetterAvatar: StoryObj<typeof meta> = {
  args: { letters: 'AB' },
};

export const ImageAvatar: StoryObj<typeof meta> = {
  args: { src: 'https://mui.com/static/images/avatar/1.jpg' },
};
