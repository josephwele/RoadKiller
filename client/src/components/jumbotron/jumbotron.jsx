import React, { Component } from 'react'
import Sky from './Sky.png';
import './jumbotron.css';


export class Jumbotron extends Component {
    render() {
        return (
    
                <div className='jumbotron jumbotron-fluid text-center' style={{ backgroundImage: 'url(' + Sky + ')', height: '180px' }} >
            
            <div className='container'>
            <h1 className='display-4'><b>Sign Up</b></h1>
            <p className='lead'>JOIN OUR TEAM FOR BUILDING STRONG MINDS, BODIES AND CHARACTER!!</p>
            </div>
          
                  </div>
         
        )
    }
}

export default Jumbotron
