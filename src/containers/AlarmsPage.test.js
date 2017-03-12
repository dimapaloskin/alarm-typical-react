import React from 'react';
import ReactDOM from 'react-dom';
import AlarmsPage from './AlarmsPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlarmsPage />, div);
});
