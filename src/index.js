import React from 'react';
import ReactDOM from 'react-dom';

// Class Component
class App extends React.Component {
  // Creating an instance of app component, constructor function is
  // automatically and instantly called before anything else
  constructor(props) {
    // Reference parents constructor
    super(props);

    // Initialize State object
    this.state = { lat: null };
  }

  // Render method required for every react component
  render() {
    // Get user position from api (takes time)
    window.navigator.geolocation.getCurrentPosition(
      // Successfully get the user position (Success Callback)
      (position) => console.log(position),

      // Failed to get the user position (Fail Callback)
      (err) => console.log(err)
    );

    return <div>Lat</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
