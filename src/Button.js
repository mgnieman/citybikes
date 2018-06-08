import React from 'react';

class Button extends React.Component {
  clickCountry = e => {
    e.preventDefault();
    console.log('you clicked', e.target.value);
  };
  render() {
    return (
      <div className="country-button">
        <button value={this.props.label} onClick={this.clickCountry}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button;
