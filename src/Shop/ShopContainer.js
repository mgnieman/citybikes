import React from 'react';
import ShopList from './ShopList';

class ShopContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <ShopList />
      </div>
    );
  }
}

export default ShopContainer;
