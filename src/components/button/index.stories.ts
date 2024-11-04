import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Box: Story = {
  args: {
    shape: 'box',
    size: 'm',
    children: 'Button',
  },
};

export const Capsule: Story = {
  args: {
    shape: 'capsule',
    size: 'm',
    children: 'Button',
  },
};

export const Error: Story = {
  args: {
    shape: 'box',
    status: 'error',
    size: 'm',
    children: 'Button',
  },
};
