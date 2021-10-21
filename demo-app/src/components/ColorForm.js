import { useState } from 'react';


export const ColorForm = (props) => {

  const [
    colorForm,
    setColorForm,
  ] = useState({
    name: '', hexcode: ''
  });

  const change = e => {

    setColorForm({
      // ... is the object spread operator ES2015
      ...colorForm, // copy the properties from the current state object

      // computed property
      [ e.target.name ]: e.target.value, // update the field we were typing in
    });

  };

  const submitColor = () => {
    props.onSubmitColor(colorForm);
    setColorForm({
      name: '', hexcode: ''
    })
  };

  return (
    <form>
      <label>
        Color Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <div>
        <label htmlFor="hexcode-input">Color Hexcode:</label>
        <input id="hexcode-input" type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </div>
      <button type="button" onClick={submitColor}>{props.buttonText}</button>
    </form>    
  );


};