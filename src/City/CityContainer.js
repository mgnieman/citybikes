import React from 'react';
import CityList from './CityList';

class CityContainer extends React.Component {
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
        this.setState({ data: json.networks });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="city-container">
        <CityList
          data={this.state.data}
          country={this.props.country}
          key={this.props.country}
        />
      </div>
    );
  }
}

export default CityContainer;
