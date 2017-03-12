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
  .add('UI with mocked data', () => (
    <AlarmList />
  ));

storiesOf('About', module)
  .add('page with static texts', () => (
    <About />
  ));
