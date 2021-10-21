import { render } from 'react-dom';

// import { HelloWorld } from './components/HelloWorld';
import { ColorTool } from './components/ColorTool';

const colorList = [
  { id: 1, name: 'blue', hexcode: '0000ff' },
  { id: 2, name: 'green', hexcode: '0000ff' },
  { id: 3, name: 'red', hexcode: '0000ff' },
  { id: 4, name: 'purple', hexcode: '0000ff' },
  { id: 5, name: 'yellow', hexcode: '0000ff' },
  { id: 6, name: 'black', hexcode: '0000ff' },
];

render(
  // React.createElement(ColorTool);
  <><ColorTool colors={colorList} /></>,
  document.querySelector('#root'),
);