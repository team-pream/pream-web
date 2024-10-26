import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Box: Story = {
  args: {
    variant: 'box',
    size: 'm',
    children: 'Button',
  },
};

export const Capsule: Story = {
  args: {
    variant: 'capsule',
    size: 'm',
    children: 'Button',
  },
};
