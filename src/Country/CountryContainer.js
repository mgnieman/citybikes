import React from 'react';
import CountryList from './CountryList';

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchData() {
    fetch('http://api.citybik.es/v2/networks/')
      .then(response => response.json())
      //   .then(json => console.log(json))
      .then(json => this.setState({ data: json }));
    //   .then(countries => this.setState({ countries }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <ul>
        <CountryList data={this.state.data} />
      </ul>
    );
  }
}

export default CountryContainer;
