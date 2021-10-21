import { useState } from 'react';

export const CarEditRow = (props) => {

  const [ carForm, setCarForm ] = useState({
    make: props.car.make,
    model: props.car.model,
    year: props.car.year,
    color: props.car.color,
    price: props.car.price
  });

  const change = e => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? parseInt(e.target.value, 10)
        : e.target.value,
    });
  };

  const saveCar = () => {
  };  

  return (
    <tr>
      <td>{props.car.id}</td>
      <td><input type="text" name="make" value={carForm.make} onChange={change} /></td>
      <td><input type="text" name="model" value={carForm.model} onChange={change} /></td>
      <td><input type="number" name="year" value={carForm.year} onChange={change} /></td>
      <td><input type="text" name="color" value={carForm.color} onChange={change} /></td>
      <td><input type="number" name="price" value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button"
          onClick={saveCar}>Save</button>
        <button type="button"
          onClick={() => null}>Cancel</button>
      </td>
    </tr>
  );

};