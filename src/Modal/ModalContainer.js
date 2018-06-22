import React from 'react';
import Modal from './Modal';

class ModalContainer extends React.Component {
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
    // const city = this.props.match.params.city;
    return (
      <div
        className="modal-container"
        ref={node => {
          this.node = node;
        }}
      >
        <button
          value={this.props.label}
          className="city-button"
          onClick={this.handleClick}
        >
          {this.props.label}
        </button>
        {this.state.isOpen && (
          <Modal show={this.state.isOpen} />
          // <ShopContainer />
        )}
      </div>
    );
  }
}

export default ModalContainer;
