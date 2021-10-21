import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([ ...props.colors ]);

  const addColor = (newColor) => {
    setColors([
      ...colors,
      {
        ...newColor,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      },
    ]);
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </> 
  );

};