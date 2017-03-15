// @flow

import React from 'react';

type Props = {
  onSubmit: () => void;
};

const handleSubmitEvent = (onSubmit) => (event) => {
  event.preventDefault();
  onSubmit(event);
}

const AlarmForm = ({ onSubmit }: Props) => {
  return (
    <form onSubmit={handleSubmitEvent(onSubmit)}>
      <input />
    </form>
  );
};

export default AlarmForm;
