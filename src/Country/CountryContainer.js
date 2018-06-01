import React from 'react';
import CountryList from './CountryList';

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fetchData() {
    fetch('http://api.citybik.es/v2/networks/')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return <CountryList />;
  }
}

export default CountryContainer;
