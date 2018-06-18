import React from 'react';
import { Link } from 'react-router-dom';
import City from './City';

const CityList = props =>
  props.data.map(network => {
    if (network.location.country === props.country) {
      return (
        <Link
          to={`/cities/${network.location.country}/${network.location.city}`}
        >
          <City data={network} />
        </Link>
      );
    }
  });

export default CityList;
