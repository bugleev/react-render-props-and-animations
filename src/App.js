import React from 'react';
import { Transition } from 'react-spring';
import logo from './logo.svg';
import { Toggle } from 'utilities';
import { Modal, Card } from 'elements';
import './App.css';
import User from './User';
import UserProvider from './UserProvider';

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
      <Transition
        from={{ transform: "translateX(-100%)", value: 0, height: '0px' }}
        enter={{ transform: "translateX(0)", value: 100, height: '200px' }}
        leave={{ transform: "translateX(-100%)", value: 0, height: '0px' }}>
        {on && Header}
      </Transition>
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
          <Toggle >
            {this.animateToggle}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

const Header = styles => (
  <Card style={{ ...styles }}>
    <h1>Show me!</h1>

  </Card>
);


export default App;
