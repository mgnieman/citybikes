import React from 'react';
import Button from '../Button';

const Country = props => (
  <Button label={props.country} country={props.country} />
);

export default Country;
