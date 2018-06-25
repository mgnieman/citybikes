import React from 'react';
import ShopList from './ShopList';
import BackButton from '../BackButton';

class ShopContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.state = { isOpen: false };
  }

  // handleClick() {
  //   if (!this.state.isOpen) {
  //     document.addEventListener('click', this.handleClick, false);
  //   } else {
  //     document.removeEventListener('click', this.handleClick, false);
  //   }
  //   this.setState(prevState => ({
  //     isOpen: !prevState.isOpen
  //   }));
  // }

  // handleOutsideClick(e) {
  //   if (this.node.contains(e.target)) {
  //     return;
  //   }
  //   this.handleClick();
  // }

  render() {
    console.log('Container props:', this.props);
    // console.log('Container state:', this.state);

    if (this.props.data) {
      const city = this.props.match.params.city;
      return (
        <div
          className="modal-container"
          className="backdrop"
          // ref={node => {
          //   this.node = node;
          // }}
        >
          <div>
            <div className="modal">
              <h4>Shops in {city}:</h4>
              <ShopList data={this.props.data} city={city} />
              <BackButton back={this.props.history.goBack} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ShopContainer;
