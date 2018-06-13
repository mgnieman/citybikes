import React from 'react';
import ShopList from './ShopList';

class ShopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
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
    return <ShopList data={this.state.data} city={this.props.city} />;
  }
}

export default ShopContainer;
