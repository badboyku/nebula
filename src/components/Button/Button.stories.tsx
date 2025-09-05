import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = { component: Button } satisfies Meta<typeof Button>;
export default meta;

export const MyButton: StoryObj<typeof meta> = {
  args: {
    label: 'My Button',
    variant: 'outlined',
  },
};
