import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // if (!this.props.show) {
    //   return null;
    // }

    return (
      <div className="backdrop">
        <div className="modal">
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }

  PropTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
}

export default Modal;