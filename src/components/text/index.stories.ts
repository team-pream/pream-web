import type { Meta, StoryObj } from '@storybook/react';
import { Text as TXT } from '@/components/text';
import { typography } from '@/styles/typography';

const meta = {
  title: 'Components/Text',
  component: TXT,
  tags: ['autodocs'],
  argTypes: {
    typo: {
      control: 'select',
      options: Object.keys(typography),
    },
  },
} satisfies Meta<typeof TXT>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    typo: 'title1',
    children: '프림 Pream',
  },
};
