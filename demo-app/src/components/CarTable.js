import { useCarToolStoreContext } from '../contexts/carToolStoreContext';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from "./CarViewRow";

export const CarTable = () => {

  const { 
    cars, editCarId,
    editCar, deleteCar,
    saveCar, cancelCar,
  } = useCarToolStoreContext();

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


