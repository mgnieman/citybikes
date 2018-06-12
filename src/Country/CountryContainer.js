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
      .then(json => {
        console.log(json.networks);
        this.setState({ data: json.networks });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="country-container">
        {this.state.data.length > 0 ? (
          <CountryList data={this.state.data} />
        ) : null}
      </div>
    );
  }
}

export default CountryContainer;
