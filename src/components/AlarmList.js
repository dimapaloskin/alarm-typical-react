import React from 'react';

const AlarmList = ({ alarms }) => {
  return (
    <ul>
      {alarms.map(alarm => <li>{alarm}</li>)}
    </ul>
  );
};

export default AlarmList;
