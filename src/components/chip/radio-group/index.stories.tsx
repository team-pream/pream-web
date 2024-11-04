import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { ChipRadioGroup } from '.';

const meta = {
  title: 'Components/Chip/ChipRadioGroup',
  component: ChipRadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ChipRadioGroup>;

export default meta;

const ITEMS = [
  { value: '1', label: '전체' },
  { value: '2', label: '위생용품' },
  { value: '3', label: '훈련용품' },
  { value: '4', label: '이동용품' },
];

export function Default() {
  const [selected, setSelected] = useState<string>(ITEMS[0].value);

  return (
    <ChipRadioGroup
      items={ITEMS}
      defaultValue={selected}
      onChange={(value: string) => setSelected(value)}
    />
  );
}
