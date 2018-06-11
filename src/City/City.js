import React from 'react';
import Button from '../Button';

const City = props => (
  <div>
    <Button label={props.data.location.city} />
  </div>
);

export default City;
