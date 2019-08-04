import React, { Component } from 'react'

export class Signin extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSignIn}>
            <div className='form-group'>
<div style={{ float: 'left', marginRight: '20px', paddingBottom:'50px',paddingTop:'10px'}}>
<div className='form-group'>
<label for='email'>Email: </label>
<input id='email' type='text' value={this.props.email} name='email' required onChange={this.props.handleOnChange}/>
</div>
<div className='form-group'>
<label for='password'>Password: </label>
<input id='password' type='password' value={this.props.pass} name='password' minlength='5' required onChange={this.props.handleOnChange}/>
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
