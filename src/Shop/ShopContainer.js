import React from 'react';
import ShopList from './ShopList';
import BackButton from '../BackButton';

class ShopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.history.goBack();
    }
  }

  render() {
    if (this.props.data) {
      const city = this.props.match.params.city;
      return (
        <div className="modal-container" className="backdrop">
          <div>
            <div className="modal">
              <h4>Shops in {city}:</h4>
              <ShopList data={this.props.data} city={city} />
              <div className="wrapper-div" ref={this.setWrapperRef}>
                <BackButton back={this.props.history.goBack} />
              </div>
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
