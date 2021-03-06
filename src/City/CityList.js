import React from 'react';
import { Link } from 'react-router-dom';
import City from './City';

const CityList = props =>
  props.data.map(network => {
    if (network.location.country === props.country) {
      return (
        <div className="city-link" key={network.id}>
          <Link
            to={`/countries/${network.location.country}/cities/${
              network.location.city
            }`}
          >
            <City data={network} />
          </Link>
        </div>
      );
    }
  });

export default CityList;
