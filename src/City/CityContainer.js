import React from 'react';
import CityList from './CityList';
import Util from '../Util';

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
    return <CityList data={this.state.data} country={this.props.country} />;
  }
}

export default CityContainer;
