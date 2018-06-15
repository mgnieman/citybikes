import React from 'react';
import Util from '../Util';
import ShopList from './ShopList';

class ShopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    Util.fetchData().then(data => {
      this.setState({
        data: data.networks
      });
    });
  }

  render() {
    return <ShopList data={this.state.data} city={this.props.city} />;
  }
}

export default ShopContainer;
