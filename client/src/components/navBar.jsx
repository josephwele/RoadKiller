import React from 'react';


export class NavBar extends React.Component {
  render () {
    return (
          <div className='card text-center'   style={{ position: 'fixed', left: '0px',  width: '100%' }}>
              <nav className='navbar'>

          
            <h1>RoadKiller</h1>
          

            
          <div className='form-group' >
              <form action='/user/login' method='post'>

                  <div style={{  marginRight: '20px', paddingTop:'26px'}}>
                <label for='email'>Email:</label>
                <input id='email' type='text' value='' name='body[email]' required />
                      <label for='password'>Password:</label>
                <input id='password' type='password' value='' name='body[password]' minlength='5' required />
              </div>

              <div style={{ float: 'left',marginRight: '0px' }}>

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
