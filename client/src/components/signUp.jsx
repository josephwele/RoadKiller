import React from 'react'
import Sky from '../Sky.png';


export class SignUp extends React.Component {
  render () {
    return (


      <div className='signUp'>

        <div className='jumbotron jumbotron-fluid'style ={ { backgroundImage: "url("+Sky+")" } } >
            
            <div className='container'>
            <h1 className='display-4'>Sign Up</h1>
            <p className='lead'>JOIN OUR TEAM FOR BUILDING STRONG MINDS, BODIES AND CHARACTER!!</p>
            </div>
          
                  </div>
                 <div className='container'>

            <div className='col-1-3'>
  <div className='first-name' style={{ float: 'left', marginRight: '20px', clear: 'both' }}>
              <label for='first-name'>
            <input type='text' name='name' id='first-name' placeholder='First Name' />
          </label>
            </div>
  <div className='last-name' st
              yle={{ float: 'left' }}>
              <label for='last-name'>
                <input type='text' name='name' id='last-name' placeholder='Last Name' />
              </label>
            </div>
  <br style={{ clear: 'both' }} />
  <div className='e-mail'>
              <label for='e-mail'>
            <input type='tel' id='e-mail' name='email' placeholder='e-mail' style={{ width: '200%' }} />
          </label>
            </div>
  <div className='pass'>
              <label for='pass'>
                <input type='password' id='pass' name='pass' placeholder='Password' minlength='5' required style={{ width: '200%' }} />
              </label>
            </div>
</div>

  <div className='col-2-3 form-group form'>

            <div className='drop-down'>
              <p>Birthdate</p>
              <input type='date' name='birthdate' style={{ display: 'block' }} />
            </div><br />

            <div className='gender'>
              <p>Geneder</p>
              <input type='radio' name='gender' value='Male' checked />Male<br />
              <input type='radio' name='gender' value='Female' />Female<br />
              <input type='radio' name='gender' value='Other' />Other
            </div><br />
            <div className='account-action'>
              <input id='btn' type='submit' name='submit' value='Sign Up' />
              <label>
                <input type='checkbox' name='remember' /> Stay signed in
              </label>
            </div>

          </div>

        </div>
      </div>

    )
    }
}
