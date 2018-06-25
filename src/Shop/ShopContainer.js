import React from 'react';
// import PropTypes from 'prop-types';
import ShopList from './ShopList';

class ShopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOpen: false };
  }

  handleClick() {
    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleClick, false);
    } else {
      document.removeEventListener('click', this.handleClick, false);
    }
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    console.log('Container props:', this.props);
    console.log('Container state:', this.state);

    if (this.props.data) {
      const city = this.props.match.params.city;
      return (
        <div
          className="backdrop"
          ref={node => {
            this.node = node;
          }}
        >
          <div className="modal">
            <h4>Shops in {city}:</h4>
            <ShopList data={this.props.data} city={city} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  // PropTypes = {
  //   onClose: PropTypes.func.isRequired,
  //   show: PropTypes.bool,
  //   children: PropTypes.node
  // };
}

export default ShopContainer;
