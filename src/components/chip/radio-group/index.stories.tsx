import type { Meta, StoryObj } from '@storybook/react';
import { ChipRadioGroup } from '@/components';

const meta = {
  title: 'Components/Chip/ChipRadioGroup',
  component: ChipRadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ChipRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { value: '1', label: '전체' },
      { value: '2', label: '위생용품' },
      { value: '3', label: '훈련용품' },
      { value: '4', label: '이동용품' },
    ],
    defaultValue: '1',
  },
  render: (args) => <ChipRadioGroup {...args} />,
};
