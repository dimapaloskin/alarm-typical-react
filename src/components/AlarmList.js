// @flow

import React from 'react';

type Props = {
  alarms: Array<string>;
};

const AlarmList = ({ alarms }: Props) => {
  if (alarms.length === 0) {
    return <p>No alarms set</p>;
  }

  return (
    <ul>
      {alarms.map(alarm => <li key={alarm}>{alarm}</li>)}
    </ul>
  );
};

export default AlarmList;
