import React, { Component } from 'react'
import Back from './Back.png'
import  './rideInfo.css'

export class RideInfo extends Component {
  render () {
    return (
      <div>
        <div>
        <nav className='Navbar '>

                <div className='bikes'>
            <h1> ROADKILLER BIKES</h1>
          </div>
          <button type='button' className='btn btn-primary btnp' onClick={this.props.handleSignout}>Signout</button>
              </nav>
              </div>

              <div className='form-group col-1-3 container' style={{ backgroundImage: 'url(' + Back + ')' }}>

          <div className='heading'>

            <h2><i>Where do you want to ride?</i></h2>
          </div>

            <form onSubmit={this.props.handleSubmit}>
          <div>
            <p>Start Location</p>
                
              <input value={this.props.start}  type='text' name='start' id='start' placeholder='Zipcode' onChange={this.props.handleOnChange}/>
          </div><br />

          <div>

              <p>Destination</p>
             
            <input value={this.props.destination}  type='text' name='destination' id='destination' placeholder='Zipcode' onChange={this.props.handleOnChange}/>
          </div><br />

          <div>

              <p>Phone Number</p>
              <input value={this.props.phonenum}  type='text' name='phonenum' className='phonenum' id='phonenum' placeholder='Phone Number' onChange={this.props.handleOnChange}/>

          </div><br />

          <div>
            <p>Starting Date</p>
            <input value={this.props.date}  type='date' name='date' id='date' onChange={this.props.handleOnChange}/>
          </div><br />
          <div>
            <p>Starting time</p>
            <input value={this.props.time}  type='time' name='time' id='time' onChange={this.props.handleOnChange}/>
          </div><br />

          <button type='button' className='btn btn-primary' onClick={this.props.handleSubmit}>Submit</button>
                </form>
        </div>
        <footer className='text-center'>
  <h1>&copy;RKB</h1>
  
</footer>

            </div>
    )
  }
}

export default RideInfo
