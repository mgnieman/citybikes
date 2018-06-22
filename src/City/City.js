import React from 'react';
import CityButton from './CityButton';
import ModalContainer from '../Modal/ModalContainer';

const City = props => (
  <ModalContainer
    label={props.data.location.city}
    city={props.data.location.city}
  />
);

export default City;
