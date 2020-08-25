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
    // Updating state, causes component to rerender
    this.state = { lat: null, errorMessage: '' };

    // Get user position from api (takes time)
    window.navigator.geolocation.getCurrentPosition(
      // Successfully get the user position (Success Callback)
      (position) => {
        // Update state
        this.setState({ lat: position.coords.latitude });
      },

      // Failed to get the user position (Fail Callback)
      (err) => {
        // Update state
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // Render method required for every react component
  render() {
    // Return Error
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    // Return Latitude
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    // Loading Screen
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
