import React from 'react'
import logo from './logo.svg'
import { NavBar } from './components/navBar.jsx'
import { Footer } from './components/footer.jsx'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <div class="container"></div>
      <div className='col-1-3'>
        <h1><b>Sign Up</b></h1>
        <div className='first-name' style={{float: 'left', marginRight: '20px', clear: 'both'}}>
              <label for='first-name'>
            <input type='text' name='name' id='first-name' placeholder='First Name' />
                </label>
        </div>
        <div className='last-name' st
        yle={{float:'left'}}>
          <label for='last-name'>
                  <input type='text' name='name' id='last-name' placeholder='Last Name' />
          </label>
        </div>
        <br style={{clear:'both'}}/>
        <div className='e-mail'>
              <label for='e-mail'>
            <input type='tel' id='e-mail' name='email' placeholder='e-mail' style={{width: '200%',}} />
                </label>
        </div>
        <div className='pass'>
          <label for='pass'>
                  <input type='password' id='pass' name='pass' placeholder='Password' minlength='5' required style={{width: '200%'}} />
                </label>
        </div>

        <div className='drop-down'>
          <p>Birthdate</p>
          <input type='date' name='birthdate' style={{display: 'block'}}/>
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

      <Footer />

    </div>
  )
}

export default App
