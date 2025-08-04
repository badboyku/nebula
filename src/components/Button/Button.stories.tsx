import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = { component: Button } satisfies Meta<typeof Button>;
export default meta;

export const MyButton: StoryObj<typeof meta> = {
  args: {
    label: 'MyButton',
  },
};
