/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Button from './ButtonStyles';

export default function ButtonComponent(props) {
  return <Button {...props} />;
}
