import React, { Component } from 'react';
import './App.css';
import { SwimLanes } from './containers/LayoutContainers/SwimLanes';
import ControlsContainer from './containers/LayoutContainers/ControlsContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store
  }

  dbSync() {
    this.store.dispatch({type: 'WINDOW_CLOSE'})
  }

  componentDidMount() {
    window.addEventListener("beforeunload", (ev) => 
    {  
      ev.preventDefault();
      return ev.returnValue = 'Are you sure you want to close?';
    });
  }
  
  componentWillUnmount() {
    this.dbSync();
    window.removeEventListener('beforeunload', this.dbSync); // remove the event handler for normal unmounting
  }

  render() {
    return (
      <div className="App">
        <div className="container bg-light">
          <ControlsContainer />
          <SwimLanes />
        </div>
      </div>
    );
  }
}
