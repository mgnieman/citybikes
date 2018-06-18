import React from 'react';
import Util from '../Util';
import ShopList from './ShopList';

class ShopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Util.fetchData().then(data => {
      this.setState({
        data: data.networks
      });
    });
  }

  render() {
    let city = this.props.match.params.city;
    return (
      <div>
        <h4>Shops in {city}:</h4>
        <ShopList data={this.state.data} city={city} />
      </div>
    );
  }
}

export default ShopContainer;
