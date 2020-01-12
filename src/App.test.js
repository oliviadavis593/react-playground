//Make React available
import React from 'react';
//make the ReactDOM available = necessary for rendering 
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    //creates a DOM element to render the component into
    const div = document.createElement('div');

    //render the component - this is the actual test. If the test fails - it'll do it here. 
    ReactDOM.render(<App />,  div)
    
    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });
})