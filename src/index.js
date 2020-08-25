import React from 'react';
import ReactDOM from 'react-dom';

// Class Component
class App extends React.Component {
  render() {
    // Get user position from api (takes time)
    window.navigator.geolocation.getCurrentPosition(
      // Successfully get the user position (Success Callback)
      (position) => console.log(position),

      // Failed to get the user position (Fail Callback)
      (err) => console.log(err)
    );

    return <div>Hi There</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
