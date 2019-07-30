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
          <div className='form' >
              <form action='/user/login' method='post'>

                  <div style={{ float: 'left', marginRight: '20px' }}>
                <label for='email'>Email:</label>
                <input id='email' type='text' value='' name='body[email]' required />
              </div>

              <div style={{ float: 'left', marginRight: '20px' }}>
                      <label for='password'>Password:</label>
                <input id='password' type='password' value='' name='body[password]' minlength='5' required />
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
