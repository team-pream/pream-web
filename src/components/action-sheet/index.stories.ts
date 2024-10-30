import type { Meta, StoryObj } from '@storybook/react';
import { ActionSheet } from '@/components';

const meta = {
  title: 'Components/ActionSheet',
  component: ActionSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof ActionSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menus: [
      {
        label: '새상품',
        onClick: () => {},
      },
      {
        label: '사용감 적음',
        onClick: () => {},
      },
      {
        label: '사용감 많음',
        onClick: () => {},
      },
    ],
  },
};
