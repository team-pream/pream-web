import { Text } from '@/components/text';
import { chipRadio, chipRadioGroup } from './index.styles';
import { useEffect, useState } from 'react';

interface ChipRadioGroupProps {
  items: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function ChipRadioGroup({ items, defaultValue, onChange }: ChipRadioGroupProps) {
  const [selected, setSelected] = useState<string | undefined>(defaultValue);

  useEffect(() => {
    if (selected && onChange) {
      onChange(selected);
    }
  }, [selected, onChange]);

  return (
    <div css={chipRadioGroup}>
      {items.map((item) => (
        <ChipRadio
          key={item.value}
          value={item.value}
          isSelected={selected === item.value}
          onChange={() => setSelected(item.value)}
        />
      ))}
    </div>
  );
}

interface ChipRadioProps {
  name?: string;
  value: string;
  defaultValue?: string;
  isSelected?: boolean;
  onChange?: () => void;
}

function ChipRadio({ name = 'radio-group', isSelected = false, value, onChange }: ChipRadioProps) {
  return (
    <label css={chipRadio({ isSelected })} onChange={onChange}>
      <input type="radio" name={name} value={value} />
      <Text typo="body5">{value}</Text>
    </label>
  );
}
