import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sample />, div);
});
