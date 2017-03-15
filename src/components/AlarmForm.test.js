// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import AlarmForm from './AlarmForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlarmForm onSubmit={() => {}} />, div);
});
