import React from 'react';
import Signin from './signin';


export class NavBar extends React.Component {
  render () {
    return (
          <div className='card text-center' style={{marginBottom: '0px'}}>
              <nav className='navbar'>

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
