// @flow

import React from 'react';
import AddAlarmButton from '../components/AddAlarmButton';

type Props = {
  onClick: () => void;
};

export default ({ onClick }: Props) => <AddAlarmButton onClick={onClick} />;
