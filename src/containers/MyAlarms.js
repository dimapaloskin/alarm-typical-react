// @flow

import React from 'react';
import AlarmList from '../components/AlarmList';
import type { Alarm } from '../actions';

const mockAlarms: Array<Alarm> = [
  { name: 'Wake up!', time: '8:00' },
  { name: 'Call in 10 minutes', time: '15:50' },
];

function addAlarm(alarm: Alarm) {

}

export default () => <AlarmList alarms={mockAlarms} addAlarm={addAlarm} />;
