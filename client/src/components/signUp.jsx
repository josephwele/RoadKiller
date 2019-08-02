// changed all the files by Jayant Rai
import React from 'react'
export class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      firstName:'',
      lastName:'',
      email:'',
      pass:'',
      birthdate:'',
      gender:'' }
}
  
  handleOnChange=(event)=>{
      this.setState({[event.target.name]:event.target.value})
  }
 render () {

    return (
      
     
      <div className='signUp text-center'>
                 <div className='container'>
                 <form onSubmit={this.props.handleSignUp(this.state)}>

            <div className='col-1-3'>
  <div className='form-group'>
              <label for='first-name'>First Name: </label>
            <input value={this.state.name} type='text' name='firstName' id='first-name' placeholder='First Name' onChange={this.handleOnChange} />
          
            </div>
  <div className='form-group'>
              <label for='last-name'>Last Name: </label>
                <input value={this.state.lastName} type='text' name='lastName' id='last-name' placeholder='Last Name' onChange={this.handleOnChange} />
              
            </div>
  <br style={{ clear: 'both' }} />
  <div className='e-mail'>
              <label for='e-mail'>
            <input value={this.state.email} type='tel' id='e-mail' name='email' placeholder='e-mail' style={{ width: '200%' }} onChange={this.handleOnChange}/>
          </label>
            </div>
  <div className='form-group'>
              <label for='pass'>
                <input value={this.state.pass} type='password' id='pass' name='pass' placeholder='Password' minlength='5' required style={{ width: '200%' }} onChange={this.handleOnChange} />
              </label>
   </div>
</div>

  <div className='col-2-3 form-group form'>

            <div className='drop-down'>
              <p>Birthdate</p>
              <input value={this.state.birthdate} type='date' name='birthdate' onChange={this.handleOnChange} />
            </div><br />

            <div className='form-check' onChange={this.handleOnChange}>
              <p>Geneder</p>
              <input value={this.state.gender} type='radio' name='gender' value='Male' checked />Male<br />
              <input value={this.state.gender} type='radio' name='gender' value='Female' />Female<br />
              <input value={this.state.gender} type='radio' name='gender' value='Other' />Other
            </div><br />
            <div className='account-action'>
              <input className='btn btn-lg success pb-2 mb-5' id='btn' type='submit' name='submit' value='Sign Up'/>
            </div>
          </div>
          </form>

        </div>
        {/* input for lastName */}
      <div className='form-group' style={{ float: 'left', marginRight: '20px', clear: 'both' }}>
        <label>Last Name: </label>
            <input type='text' required className='form-control' value={this.state.lastName} onChange={this.onChangelastName} />
      </div>  
        {/* input for email */}
      <div className='form-group' style={{ float: 'left', marginRight: '20px', clear: 'both' }}>
        <label>Email: </label>
            <input type='text' required className='form-control' value={this.state.email} onChange={this.onChangeemail} />
      </div> 
        {/* input for password */}
      <div className='form-group' style={{ float: 'left', marginRight: '20px', clear: 'both' }}>
        <label>Password: </label>
            <input type='text' required className='form-control' value={this.state.password} onChange={this.onChangepassword} />
      </div> 
       {/* input for date */}
      <div className='form-group' style={{ float: 'left', marginRight: '20px', clear: 'both' }}>
        <label>Birthdate: </label>
        {/* for date picker installed react datepicker npm package */}
            
            selected={this.state.birthdate} onChange={this.onChangebirthdate} />
      </div>    
      
      <div className='form-group'>
        <input type='submit' value='Create Riders Log' className='btn btn-primary' />  
      </div>
      </div> 
      
    

    )
    }
}
