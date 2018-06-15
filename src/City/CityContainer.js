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
        data: data.networks
      })
    );
  }

  render() {
    return (
      <div>
        <h4>City Container here</h4>
        <CityList data={this.state.data} country={this.props.country} />
      </div>
    );
  }
}

export default CityContainer;
