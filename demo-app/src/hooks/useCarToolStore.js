import { useState, useEffect, useCallback } from 'react';

export const useCarToolStore = () => {

  const [ cars, setCars ] = useState([]);
  const [ editCarId, setEditCarId ] = useState(-1);

  const refreshCars = useCallback(async () => {
    const res = await fetch('http://localhost:3060/cars');
    const cars = await res.json();
    setCars(cars);
  }, []);

  const addCar =  useCallback(async newCar => {
    
    await fetch('http://localhost:3060/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCar)
    });

    await refreshCars();

    setEditCarId(-1);
  }, [refreshCars]);

  const saveCar = useCallback(async car => {
    
    await fetch('http://localhost:3060/cars/' + encodeURIComponent(car.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car)
    });

    await refreshCars();

    setEditCarId(-1);
  }, [refreshCars]);

  const deleteCar = useCallback(async carId => {
    
    await fetch('http://localhost:3060/cars/' + encodeURIComponent(carId), {
      method: 'DELETE',
    });

    await refreshCars();

    setEditCarId(-1);
  }, [refreshCars]);

  const cancelCar = () => setEditCarId(-1);

  useEffect(() => {

    refreshCars();

  }, [refreshCars]);

  return {
    cars,
    editCarId,
    addCar,
    saveCar,
    deleteCar,
    editCar: setEditCarId,
    cancelCar,
  };

};