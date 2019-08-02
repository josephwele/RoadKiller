import React from 'react';


export class NavBar extends React.Component {
  render () {
    return (
          <div className='card text-center' style={{marginBottom: '0px'}}>
              <nav className='navbar'>

          <div className='bikes'>
            <h1>BIKES</h1>
            </div>

            <div className='dropdown' style={{position: 'absolute', left:'15px', bottom: '0px', }}>
              <select name='bike'>
              <option value='components'>COMPONENTS</option>
              <option value='accesories'>ACCESORIES</option>
              <option value='contact'>CONTACT</option>

            </select>

          </div>
          <div className='form-group' >
              <form action='/user/login' method='post'>

                  <div style={{ float: 'left', marginRight: '20px', paddingBottom:'50px'}}>
                <label>Email:</label>
                <input id='email' type='text' defaultValue='email...' name='body[email]' required />
                      <label>Password:</label>
                <input id='password' type='password' defaultValue='password...' name='body[password]' minLength='5' required />
              </div>

              <div style={{ float: 'left' }}>

                <button type='submit' name='submit' id='sign-in' value='send' className='btn btn-primary'>Sign in</button>
              </div>

              <br style={{ clear: 'both' }} />

            </form>
          </div>
        </nav>
      </div>
    )
  }
}
