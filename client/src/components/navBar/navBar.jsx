import React from 'react';
import Signin from '../signin/signin';
import navBar from './navBar.css';


export class NavBar extends React.Component {
  handleSignIn=(event)=>{
    event.preventDefault()
    this.props.handleSignIn()
  }
 
   render () {
    return (
          <div>
              <nav className='navbar' style={navBar}>

          <div className='bikes'>
            </div>
          <div>
              <Signin handleOnChange={this.props.handleOnChange} handleSignIn={this.handleSignIn}/>

          </div>
        </nav>
      </div>
    )
  }
}
