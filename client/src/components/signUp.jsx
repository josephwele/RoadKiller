import React from 'react'
export class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      name:'',
      email:'',
      pass:'',
      birthdate:'',
      gender:'' }
}
  
  
  handleOnChange=(event)=>{
      this.setState({state:event.target.value})
  }
  render () {
    return (
      <div className='signUp text-center'>
                 <div className='container'>

            <div className='col-1-3'>
  <div className='first-name' style={{ marginRight: '20px', clear: 'both' }}>
              <label for='first-name'>
            <input value={this.state.name} type='text' name='name' id='first-name' placeholder='First Name' onChange={this.handleOnChange} />
          </label>
            </div>
  <div className='last-name'>
              <label for='last-name'>
                <input value={this.state.lastName} type='text' name='name' id='last-name' placeholder='Last Name' onChange={this.handleOnChange} />
              </label>
            </div>
  <br style={{ clear: 'both' }} />
  <div className='e-mail'>
              <label for='e-mail'>
            <input value={this.state.email} type='tel' id='e-mail' name='email' placeholder='e-mail' style={{ width: '200%' }} onChange={this.handleOnChange}/>
          </label>
            </div>
  <div className='pass'>
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

            <div className='gender' onChange={this.handleOnChange}>
              <p>Geneder</p>
              <input value={this.state.gender} type='radio' name='gender' value='Male' checked />Male<br />
              <input value={this.state.gender} type='radio' name='gender' value='Female' />Female<br />
              <input value={this.state.gender} type='radio' name='gender' value='Other' />Other
            </div><br />
            <div className='account-action'>
              <input  id='btn' type='submit' name='submit' value='Sign Up' />
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
