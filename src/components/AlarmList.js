// @flow

import React from 'react';
import type { Alarm } from '../actions';

type Props = {
  alarms: Array<Alarm>;
  adding?: bool;
};

const AlarmList = ({ alarms, adding = false }: Props) => {
  if (alarms.length === 0 && !adding) {
    return <p>No alarms set</p>;
  }

  return (
    <ul>
      {alarms.map((alarm, i) => <li key={i}>{alarm.name}: {alarm.time}</li>)}
      {adding && <li><input /></li>}
    </ul>
  );
};

export default AlarmList;
