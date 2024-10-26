import Button from '@/components/button';
import { RadioGroup } from '@/components/radio-group';
import { useState } from 'react';

export default function Main() {
  const [selectedValue, setSelectedValue] = useState<string>('option1');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const options = [
    {
      value: 'option1',
      node: (
        <Button variant="box" size="s">
          Option 1
        </Button>
      ),
    },
    {
      value: 'option2',
      node: (
        <Button variant="box" size="s">
          Option 2
        </Button>
      ),
    },
    {
      value: 'option3',
      node: (
        <Button variant="box" size="s">
          Option 3
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h3>Select an Option</h3>
      <RadioGroup
        options={options}
        name="example"
        selectedValue={selectedValue}
        onChange={handleRadioChange}
      />
      <p>Selected: {selectedValue}</p>
    </div>
  );
}
