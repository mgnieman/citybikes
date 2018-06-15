import React from 'react';
import CityButton from './CityButton';

const City = props => <CityButton label={props.data.location.city} />;

export default City;
