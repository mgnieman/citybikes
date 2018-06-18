import React from 'react';
import { Link } from 'react-router-dom';
import City from './City';

const CityList = props =>
  props.data.map(network => {
    if (network.location.country === props.country) {
      return (
        <Link
          to={`/countries/${network.location.country}/cities/${
            network.location.city
          }`}
          key={network.id}
        >
          <City data={network} />
        </Link>
      );
    }
  });

export default CityList;
