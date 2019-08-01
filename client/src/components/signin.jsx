import React, { Component } from 'react'

export class Signin extends Component {
    render() {
        return (
            <div className='form-group'>
               <form onClick={this.props.handleSignIn}>

<div style={{ float: 'left', marginRight: '20px', paddingBottom:'50px'}}>
<label for='email'>Email:</label>
<input id='email' type='text' value='' name='body[email]' required />
    <label for='password'>Password:</label>
<input id='password' type='password' value='' name='body[password]' minlength='5' required />
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
