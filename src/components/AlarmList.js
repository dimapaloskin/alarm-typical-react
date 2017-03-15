// @flow

import React from 'react';
import type { Alarm } from '../actions';

type Props = {
  alarms: Array<Alarm>;
};

const AlarmList = ({ alarms }: Props) => {
  if (alarms.length === 0) {
    return <p>No alarms set</p>;
  }

  return (
    <ul>
      {alarms.map((alarm, i) => <li key={i}>{alarm.name}: {alarm.time}</li>)}
    </ul>
  );
};

export default AlarmList;
