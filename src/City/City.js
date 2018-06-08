import React from 'react';
import Button from '../Button';

const City = props => (
  <div>
    <h4>{props.data.location.country}</h4>
    <Button label={props.data.location.city} />
  </div>
);

export default City;
