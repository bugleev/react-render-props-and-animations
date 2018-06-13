import React from 'react';
import { UserContext } from './UserContext';
export default class UserProvider extends React.Component {
  state = {
    id: '123',
    name: 'Andrew'
  }
  logout = () => {
    this.setState({
      id: null,
      name: null
    })
  }
  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
