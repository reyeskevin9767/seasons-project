import React from 'react';

// Function Component
const Spinner = ({ message }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{message}</div>
    </div>
  );
};

// Give message a default value
Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
