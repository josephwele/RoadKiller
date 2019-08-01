import React from 'react'
import Sky from '../Sky.png'
import Biker from '../Biker.png'

export class SignUp extends React.Component {
  render () {
    return (
       
      <div className='signUp'>

        <div className='jumbotron 'style={{ backgroundImage: 'url(' + Sky + ')', height: '250px' }} >

          <div className='container'>
            <h3 className='display-4'>Sign Up</h3>
            <p className='lead'>JOIN OUR TEAM FOR BUILDING STRONG MINDS, BODIES AND CHARACTER!!</p>
          </div>

        </div>
        <div className='container' style={{backgroundImage: 'url(' + Biker + ')',}}>

        <h2>SignUp here</h2>

<div className='hero' >
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input className="input" type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input className="input" type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="email">Email</label>
    <input className="input" type="text" id="email" name="email" placeholder="email.."/>

    <label for="password">Password</label><br/>
    <input className="input" type="password" id="password" name="pass" placeholder="password.."/>

    <div className="drop-down">
      
    <label for="birthdate">Birthdate</label><br/>
                <input className="input" type="date" name="birthdate"/>
            </div>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input className="input"   type="submit" value="Submit"/>
  </form>
</div>
        </div>
      </div>

    )
  }
}
