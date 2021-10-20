import { render } from 'react-dom';

import { HelloWorld } from './components/HelloWorld';


render(
  // React.createElement(HelloWorld);
  <HelloWorld />,
  document.querySelector('#root'),
);