// @flow

import React from 'react';

export default ({ onClick }: { onClick: () => void}) => (
  <button onClick={onClick}>Add another alarm</button>
);
