import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from './CarForm';

import { useCarToolStore } from '../hooks/useCarToolStore';

export const CarTool = (props) => {

  const { 
    cars, editCarId,
    editCar, deleteCar,
    saveCar, cancelCar,
    addCar,
  } = useCarToolStore(props.cars);



  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};