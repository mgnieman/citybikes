import React from 'react';
import Util from '../Util';
import ShopList from './ShopList';

class ShopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      city: null
    };
  }

  componentDidMount() {
    Util.fetchData().then(data => {
      this.setState({
        data: data.networks,
        city: this.props.match.params.city
      });
    });
  }

  render() {
    console.log('ShopContainer props:', this.props.match);
    return (
      <div>
        <h4>Shops in {this.state.city}:</h4>
        <ShopList data={this.state.data} city={this.state.city} />
      </div>
    );
  }
}

export default ShopContainer;
