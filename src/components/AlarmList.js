import React from 'react';

const AlarmList = ({ alarms = [] }) => {
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
