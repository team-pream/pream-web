import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '판매 희망가',
    placeholder: '판매 희망가를 입력해 주세요.',
  },
};

export const Focused: Story = {
  args: {
    label: '판매 희망가',
    autoFocus: true,
  },
};

export const Error: Story = {
  args: {
    label: '판매 희망가',
    errorMessage: '최소 판매 가격은 100원입니다.',
  },
};

export const Disabled: Story = {
  args: {
    label: '판매 희망가',
    disabled: true,
  },
};
