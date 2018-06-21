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
    return (
      <div
        className="modal-container"
        ref={node => {
          this.node = node;
        }}
      >
        <button onClick={this.handleClick}>Open the modal</button>
        {this.state.isOpen && (
          <Modal show={this.state.isOpen}>
            Here's some content for the modal
          </Modal>
        )}
      </div>
    );
  }
}

export default ModalContainer;
