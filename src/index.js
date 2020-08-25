import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Component Lifecycle
// constructor (one-time setup, state initialize) ->
// render (return JSX) ->
// componentDidMount (data-loading) ->
// componentDidUpdate (data-loading when state/props change) ->
// componentWillUnmount (clean-up)

// Class Component
class App extends React.Component {
  // Alternative way to initialize state and creates the constructor
  state = { lat: null, errorMessage: '' };

  // load the first time, component is rendered
  componentDidMount() {
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

  // Avoid conditionals in render
  renderContent() {
    // Return Error
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    // Return Latitude
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    // Loading Screen
    return <Spinner message="Please Accept Location Request" />;
  }

  // Render method required for every react component
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
