import React, { Component } from 'react'

export class Signin extends Component {
    constructor(props){
        super(props)
        this.state ={
            userName:'',
       password:'' }
    }
    
    handleChangeEmail=(event)=>{
        this.setState({userName:event.target.value})
        
    }
    handleChangePass =(event)=>{
        this.setState({password:event.target.value})
    }
    handleSign=()=>{
        this.props.handleSignIn(this.state.userName,this.state.password)
    }
    render() {
        return (
            <div className='form-group'>
               <form onSubmit={this.handleSign}>

<div style={{ float: 'left', marginRight: '20px', paddingBottom:'50px',paddingTop:'10px'}}>
<label for='email'>Email:</label>
<input id='email' type='text' value={this.state.userName} name='body[email]' required onChange={this.handleChangeEmail}/>
    <label for='password'>Password:</label>
<input id='password' type='password' value={this.state.password} name='body[password]' minlength='5' required onChange={this.handleChangePass}/>
</div>

<div style={{ float: 'left' }}>

<button type='submit' name='submit' id='sign-in' value='send' className='btn btn-primary'>Sign in</button>
</div>

<br style={{ clear: 'both' }} />

</form> 
            </div>
        )
    }
}

export default Signin