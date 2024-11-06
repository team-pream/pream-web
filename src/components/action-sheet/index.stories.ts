import type { Meta, StoryObj } from '@storybook/react';
import { ActionSheet } from '@/components';
import { PRODUCT_CONDITION } from '@/types';

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
        value: PRODUCT_CONDITION.NEW,
      },
      {
        label: '사용감 적음',
        value: PRODUCT_CONDITION.SLIGHTLY_USED,
      },
      {
        label: '사용감 많음',
        value: PRODUCT_CONDITION.HEAVILY_USED,
      },
    ],
    onClose: () => {},
  },
};
