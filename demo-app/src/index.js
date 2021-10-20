import { render } from 'react-dom';

// import { HelloWorld } from './components/HelloWorld';
import { ColorTool } from './components/ColorTool';


render(
  // React.createElement(ColorTool);
  <ColorTool />,
  document.querySelector('#root'),
);