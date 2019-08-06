import React, { Component } from 'react'
import Back from './Back.png'

export class RideInfo extends Component {
  render () {
    return (
      <div>
        <nav className='navbar '>

                <div className='bikes'>
            <h1> ROADKILLER BIKES</h1>
          </div>
          <button type='button' className='btn btn-primary'>Signout</button>
              </nav>

              <div className='form-group col-1-3 container' style={{ backgroundImage: 'url(' + Back + ')' }}>

          <div className='heading'>

            <h2><i>Where do you want to ride?</i></h2>
          </div>

          <div>
            <p>Start Location</p>
              <input type='text' name='start' id='start' placeholder='Zipcode' />
          </div><br />

          <div>

              <p>Destination</p>
            <input type='text' name='destination' id='destination' placeholder='Zipcode' />
          </div><br />

          <div>

              <p>Phone Number</p>
              <input type='text' name='phonenum' className='phonenum' id='phonenum' placeholder='Phone Number' />

          </div><br />

          <div>
            <p>Starting Date</p>
            <input type='date' name='date' id='date' />
          </div><br />
          <div>
            <p>Starting time</p>
            <input type='time' name='time' id='time' />
          </div><br />

          <button type='button' className='btn btn-primary'>Submit</button>
        </div>

            </div>
    )
  }
}

export default RideInfo
