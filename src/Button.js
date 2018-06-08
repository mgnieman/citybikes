import React from 'react';
import CityContainer from './City/CityContainer';
// import CityContainer from './City/CityContainer';

class Button extends React.Component {
  clickCountry = e => {
    e.preventDefault();
    console.log('you clicked', e.target.value);
    // <CityContainer country={e.target.value} />;
    // this.setState({
    //   country: e.target.value
    // });
  };

  render() {
    return (
      <div className="country-button">
        <button value={this.props.label} onClick={this.clickCountry}>
          {this.props.label}
        </button>
        {/* <div>
          <CityContainer country={this.state.country} />
        </div> */}
      </div>
    );
  }
}

export default Button;
