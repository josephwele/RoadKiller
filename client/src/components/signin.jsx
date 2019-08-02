import React, { Component } from 'react'

export class Signin extends Component {
    constructor(props){
        super(props)
        this.state ={
            email:'',
       password:'' }
    }
    
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        
    }
    handleSign=()=>{
        this.props.handleSignIn(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSign}>
            <div className='form-group'>
<div style={{ float: 'left', marginRight: '20px', paddingBottom:'50px',paddingTop:'10px'}}>
<div className='form-group'>
<label for='email'>Email: </label>
<input id='email' type='text' value={this.state.userName} name='email' required onChange={this.handleChange}/>
</div>
<div className='form-group'>
<label for='password'>Password: </label>
<input id='password' type='password' value={this.state.password} name='password' minlength='5' required onChange={this.handleChange}/>
</div>
</div>
<div style={{ float: 'left' }}>
<button type='submit' name='submit' id='sign-in' value='send' className='btn btn-primary'>Sign in</button>
</div>
<br style={{ clear: 'both' }} />

            </div>
</form> 
        )
    }
}

export default Signin
