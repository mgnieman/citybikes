import React from 'react';
import Util from '../Util';
import CountryButton from '../Country/CountryButton';
import CityList from './CityList';

class CityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    Util.fetchData().then(data =>
      this.setState({
        data: data.networks
      })
    );
  }

  render() {
    console.log(this.props);
    // return <CityList data={this.state.data} country={this.props.country} />;
    return <h4>City Container here</h4>;
  }
}

export default CityContainer;
