import { StoryObj, type Meta } from '@storybook/react';
import { SearchBar } from '@/components';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
