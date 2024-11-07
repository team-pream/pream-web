import { StoryObj, type Meta } from '@storybook/react';
import { AppBarBack, Logo, Search as SearchIcon } from '@/assets/icons';
import { AppBar, SearchBar } from '@/components';

const meta: Meta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Back: Story = {
  args: {
    prefix: <AppBarBack height="24px" cursor="pointer" />,
  },
};

export const SearchInput: Story = {
  args: {
    prefix: <AppBarBack height="24px" cursor="pointer" />,
    suffix: <SearchBar autoFocus />,
  },
};

export const Search: Story = {
  args: {
    prefix: <Logo width="94px" height="24px" />,
    suffix: <SearchIcon width="20px" height="20px" cursor="pointer" />,
  },
};
