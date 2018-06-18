import React from 'react';
import Util from '../Util';
import CityList from './CityList';

class CityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      country: null
    };
  }

  componentDidMount() {
    Util.fetchData().then(data =>
      this.setState({
        data: data.networks,
        country: this.props.match.params.country
      })
    );
  }

  render() {
    return (
      <div>
        <h4>Select a city in {this.state.country}</h4>
        <div className="city-container">
          <CityList data={this.state.data} country={this.state.country} />
        </div>
      </div>
    );
  }
}

export default CityContainer;
