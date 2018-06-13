import React, { Component } from 'react'
import { UserContext } from './UserContext';


export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <div>
            <h3>User info</h3>
            <h5>{context.user.id} {context.user.name}</h5>
            <button onClick={context.logout}>Log Out</button>
          </div>
        )}
      </UserContext.Consumer>
    )
  }
}
