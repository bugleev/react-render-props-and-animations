import React from 'react';
import logo from './logo.svg';
import { Toggle } from 'utilities';
import { Modal } from 'elements';
import './App.css';
import User from './User';
import UserProvider from './UserProvider';
import Drag from './Drag';

class App extends React.Component {
  renderModal = ({ on, toggle }) => (
    <React.Fragment>
      <button onClick={toggle}>Open</button>
      <Modal on={on} toggle={toggle}>
        <h1>Still here</h1>
      </Modal >
    </React.Fragment>
  )
  animateToggle = ({ on, toggle }) => (
    <React.Fragment>
      <button onClick={toggle}>Animate</button>
    </React.Fragment>
  )
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <User />
          <Toggle >
            {this.renderModal}
          </Toggle>
          <Drag />
        </div>
      </UserProvider>
    );
  }
}


export default App;
