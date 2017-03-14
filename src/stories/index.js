// @flow

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import AlarmList from '../components/AlarmList';
import About from '../components/About';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('AlarmList', module)
  .add('with no alarms', () => (
    <AlarmList alarms={[]} />
  ))
  .add('with two alarms', () => (
    <AlarmList alarms={['8:00', '15:50']} />
  ))
  .add('with five alarms', () => {
    const alarms = ['8:00', '9:00', '10:00', '11:00', '12:00'];
    return <AlarmList alarms={alarms} />
  });

storiesOf('About', module)
  .add('page with static texts', () => (
    <About />
  ));
