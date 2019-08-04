// changed all the files by Jayant Rai
import React from 'react'
import Biker from './Biker.png'
import './signUp.css'



export class SignUp extends React.Component {
  render () {

    return (
      
     
      <div className='signUp text-center'style={{ backgroundImage: 'url(' + Biker + ')'}} >
                 <div className='container'>
                 <form onSubmit={this.props.handleSignUp}>

            <div className='col-1-3'>
  <div className='form-group'>
              <label for='first-name'>First Name: </label>
            <input value={this.props.name} type='text' name='firstName' id='first-name' placeholder='First Name' onChange={this.props.handleOnChange} />
          
            </div>
  <div className='form-group'>
              <label for='last-name'>Last Name: </label>
                <input value={this.props.lastName} type='text' name='lastName' id='last-name' placeholder='Last Name' onChange={this.props.handleOnChange} />
              
            </div>
  <br style={{ clear: 'both' }} />
  <div className='e-mail'>
              <label for='e-mail'>
            <input value={this.props.email} type='tel' id='e-mail' name='email' placeholder='e-mail' style={{ width: '200%' }} onChange={this.props.handleOnChange}/>
          </label>
            </div>
  <div className='form-group'>
              <label for='pass'>
                <input value={this.props.pass} type='password' id='pass' name='pass' placeholder='Password' minlength='5' required style={{ width: '200%' }} onChange={this.props.handleOnChange} />
              </label>
   </div>
</div>

  <div className='col-2-3 form-group form'>

            <div className='drop-down'>
              <p>Birthdate</p>
              <input value={this.props.birthdate} type='date' name='birthdate' onChange={this.props.handleOnChange} />
            </div><br />

            <div className='form-check' value={this.props.gender} onChange={this.props.handleOnChange}>
              <p >Geneder </p>
              <input  type='radio' name='gender' value='Male' checked />Male<br />
              <input  type='radio' name='gender' value='Female' />Female<br />
              <input type='radio' name='gender' value='Other' />Other
            </div><br />
            <div className='account-action'>
              <input className='btn btn-lg success pb-2 mb-5' id='btn' type='submit' name='submit' value='Sign Up'/>
            </div>
          </div>
          </form>

        </div>
        
      </div> 
      
    

    )
    }
}
