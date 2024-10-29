import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '@/components';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Primary Dialog',
    description: 'Primary Dialog Description',
    primaryActionLabel: 'Action',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Dialog',
    description: 'Secondary Dialog Description',
    primaryActionLabel: 'Action',
    secondaryActionLabel: 'Cancel',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: '제목',
    description: '에러에 대한 설명',
    primaryActionLabel: '메인으로 돌아가기',
  },
};
