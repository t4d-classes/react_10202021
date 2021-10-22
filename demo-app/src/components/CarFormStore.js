import PropTypes from 'prop-types';

import  { useForm } from '../hooks/useForm';

import { useCarToolStoreContext } from '../contexts/carToolStoreContext';

export const CarForm = (props) => {

  const { addCar } = useCarToolStoreContext();

  const [ carForm, change, resetCarForm ] = useForm({
    make: '', model: '', year: 1900, color: '', price: 0
  });

  const submitCar = () => {
    addCar(carForm);
    resetCarForm();
  };


  return (
    <form>
      <label>
        Make:
        <input type="text" name="make" value={carForm.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model" value={carForm.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="number" name="year" value={carForm.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color" value={carForm.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={carForm.price} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>{props.buttonText}</button>
    </form>    
  );


};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

CarForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  // onSubmitCar: PropTypes.func.isRequired,
};

// const jsonData = '[ { "name": "red", "value": "f00" }, { "name": "green", "value": "0f0" }, { "name": "blue", "value": "00f" }]';

// const colorKeyValues = JSON.parse(jsonData);

// const colorsEnum = colorKeyValues.reduce(
//   (enumObj, { name, value}) => {
//     enumObj[name] = value;
//     return enumObj;
//   }
//   ,{});

// console.log(colorsEnum);

// console.log(colorsEnum.red);
// console.log(colorsEnum.blue);

// const enumValues = Object.values(colorsEnum);

// console.log(enumValues);

// PropTypes.oneOf(enumValues);

