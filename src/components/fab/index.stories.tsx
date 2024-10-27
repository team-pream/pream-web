import type { Meta, StoryObj } from '@storybook/react';
import { FabPlus } from '@/assets/icons';
import { FAB } from '@/components';

const meta = {
  title: 'Components/FAB',
  component: FAB,
  tags: ['autodocs'],
} satisfies Meta<typeof FAB>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 's',
    icon: <FabPlus width="20px" height="20" />,
  },
};
