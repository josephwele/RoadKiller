import React from 'react'
import { NavBar } from './components/navBar.jsx'
import { SignUp } from './components/signUp.jsx'
import { Footer } from './components/footer.jsx'
// import { ImageSlider } from './src/data/imageslider.js'

function App () {
  return (
    <div className='App'>
      <NavBar />
        {/* <ImageSlider />
      </NavBar> */}
      <SignUp />
      <Footer />

    </div>
  )
}

export default App
