import React from 'react';

const CityCont = ({ match }) => (
  <div>
    <h4>Hello {match.params.country}</h4>
  </div>
);

export default CityCont;
