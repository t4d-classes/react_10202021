import { render } from 'react-dom';

import { CarToolStoreProvider } from './contexts/carToolStoreContext';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { DataTable } from './components/DataTable';

const colorList = [
  { id: 1, name: 'blue', hexcode: '0000ff' },
  { id: 2, name: 'green', hexcode: '0000ff' },
  { id: 3, name: 'red', hexcode: '0000ff' },
  { id: 4, name: 'purple', hexcode: '0000ff' },
  { id: 5, name: 'yellow', hexcode: '0000ff' },
  { id: 6, name: 'black', hexcode: '0000ff' },
];

const carList = [
  // {
  //   id: 1,
  //   make: "Ford",
  //   model: "Fusion Hybrid",
  //   year: 2021,
  //   color: "blue",
  //   price: 45000,
  // },
  // {
  //   id: 2,
  //   make: "Tesla",
  //   model: "S",
  //   year: 2019,
  //   color: "white",
  //   price: 120000,
  // },
];

const config = {
  columns: [
    { id: 1, caption: 'Id', field: car => car.id },
    { id: 2, caption: 'Make', field: car => car.make },
    { id: 3, caption: 'Model', field: car => car.model },
    { id: 4, caption: 'Year', field: car => car.year },
    { id: 5, caption: 'Color', field: car => car.color },
    { id: 6, caption: 'Price', field: car => '$' + car.price },
  ]
}

render(
  <>
    <ColorTool colors={colorList} />
    <CarToolStoreProvider cars={carList}>
      <CarTool />
    </CarToolStoreProvider>
    <DataTable config={config} items={carList} />
  </>,
  document.querySelector('#root'),
);