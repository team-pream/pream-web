import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/input';
import { Button } from '../button';

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

export const Confirmed: Story = {
  args: {
    label: '판매 희망가',
    confirmMessage: '판매 희망가가 확인되었습니다.',
  },
};

export const WithSuffix: Story = {
  args: {
    label: '판매 희망가',
    confirmMessage: '판매 희망가가 확인되었습니다.',
    suffix: (
      <Button variant="box" size="xs">
        확인
      </Button>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: '판매 희망가',
    disabled: true,
  },
};
