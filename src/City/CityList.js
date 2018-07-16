import React from 'react';
import { Link } from 'react-router-dom';
import City from './City';

const CityList = props => {
  const sortedByCity = () => {
    const cityArr = [];
    let sorted = [];
    props.data.map(network => {
      if (network.location.country === props.country) {
        cityArr.push(network);
        sorted = cityArr.slice(0);
        sorted.sort(function(a, b) {
          let nameA = a.location.city.toLowerCase();
          let nameB = b.location.city.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return sorted;
        });
      }
      return sorted;
    });
    return sorted;
  };

  return sortedByCity().map(network => {
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
  });
};

export default CityList;
