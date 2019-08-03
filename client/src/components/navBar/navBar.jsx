import React from 'react';
import Signin from '../signin/signin';
import navBar from './navBar.css';


export class NavBar extends React.Component {
  render () {
    return (
          <div>
              <nav className='navbar '>

          <div className='bikes'>
            <h1> ROADKILLER BIKES</h1>
            </div>
          <div>
              <Signin handleSignIn={this.props.handleSignIn}/>

          </div>
        </nav>
      </div>
    )
  }
}
