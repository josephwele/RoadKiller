import React from 'react';
import logo from './logo.svg';
import  {NavBar}  from './components/navBar.jsx'
import {SignUp} from './components/signUp.jsx'
import  {Footer}  from './components/footer.jsx'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <SignUp />
      <Footer />

    </div>
  )
}

export default App
