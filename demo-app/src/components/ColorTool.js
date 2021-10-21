import { useState } from 'react';

export const ColorTool = (props) => {

  // array destructuring
  const [
    colorForm, // current state data
    setColorForm, // update the state data, and re-render
  ] = useState({
    name: '', hexcode: '' // initial state data
  });

  const change = e => {

    setColorForm({
      // ... is the object spread operator ES2015
      ...colorForm, // copy the properties from the current state object

      // computed property
      [ e.target.name ]: e.target.value, // update the field we were typing in
    });

  };

  console.log(colorForm);

  return (
    <>
      <header>
        {/* React.createElement('h1', { className: 'page-header' }, 'Color Tool') */}
        <h1 className="page-header">Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
      <form>
        <label>
          Color Name:
          <input type="text" name="name" value={colorForm.name} onChange={change} />
        </label>
        <div>
          <label htmlFor="hexcode-input">Color Hexcode:</label>
          <input id="hexcode-input" type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </div>
        <button type="button">Add Color</button>
      </form>
    </>
  );

};