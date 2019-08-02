import React from 'react';
import Signin from '../signin/signin';


export class NavBar extends React.Component {
  render () {
    return (
          <div>
              <nav className='navbar navbar-dark bg-primary'>

          <div className='bikes'>
            <h1>BIKES</h1>
            </div>
          <div>
              <Signin handleSignIn={this.props.handleSignIn}/>

          </div>
        </nav>
      </div>
    )
  }
}
