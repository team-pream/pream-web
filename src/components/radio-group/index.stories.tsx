import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { Button, RadioGroup } from '@/components';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const Default = () => {
  const [selected, setSelected] = useState<string>('1');

  const options = [
    {
      value: '1',
      node: (
        <Button variant="capsule" size="s" status={selected === '1' ? 'pressed' : 'active'}>
          option1
        </Button>
      ),
    },
    {
      value: '2',
      node: (
        <Button variant="capsule" size="s" status={selected === '2' ? 'pressed' : 'active'}>
          option2
        </Button>
      ),
    },
    {
      value: '3',
      node: (
        <Button variant="capsule" size="s" status={selected === '3' ? 'pressed' : 'active'}>
          option3
        </Button>
      ),
    },
  ];

  return (
    <RadioGroup
      options={options}
      selectedValue={selected}
      onChange={(value: string) => {
        setSelected(value);
      }}
      style={{ gap: '8px' }}
    />
  );
};
