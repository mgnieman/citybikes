import React from 'react';
import CountryList from './CountryList';
import Util from '../Util';

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Util.fetchData().then(data => {
      this.setState({
        data: data.networks
      });
    });
  }

  render() {
    return (
      <div className="country-container">
        {this.state.data.length > 0 ? (
          <CountryList data={this.state.data} />
        ) : null}
      </div>
    );
  }
}

export default CountryContainer;
