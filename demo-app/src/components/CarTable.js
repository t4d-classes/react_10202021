import PropTypes from 'prop-types';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from "./CarViewRow";

export const CarTable = ({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  return (
    <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Car</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            car.id === editCarId
              ? <CarEditRow key={car.id} car={car}
                  onSaveCar={saveCar} onCancelCar={cancelCar} />
              : <CarViewRow key={car.id} car={car}
                  onEditCar={editCar} onDeleteCar={deleteCar} />
          ))}
        </tbody>
      </table>    
  );


}

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
};

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  editCarId: PropTypes.number.isRequired,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};
