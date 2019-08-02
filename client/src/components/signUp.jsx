// changed all the files by Jayant Rai
import React from 'react'
import Sky from '../Sky.png'
// import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export class SignUp extends React.Component {
  constructor(props) {
    super(props)
    // referring to class with this
    this.onChangefirstName = this.onChangefirstName.bind(this)
    this.onChangelastName = this.onChangelastName.bind(this)
    this.onChangeemail = this.onChangeemail.bind(this)
    this.onChangepassword = this.onChangepassword.bind(this)
    this.onChangebirthdate = this.onChangebirthdate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthdate: new Date(),
      riders: []

    }
  }

  componentDidMount() {
    this.setState({
      riders: ['test rider'],
      firstName: 'Jayant'
    })
  }

  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }
  
  onChangelastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangepassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangebirthdate(date) {
    this.setState({
      birthdate: date
    })
  }

  // handle the form

  onSubmit(e) {
    // prevents loading to a new unknown page
    e.preventDefault()

  const riders = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email,
    password: this.state.password,
    birthdate: this.state.birthdate
  }
  console.log(riders)

  }
  render () {
    return (


    <div className='signUp'>

      <div className='jumbotron jumbotron-fluid'style ={ { backgroundImage: "url("+Sky+")" } } >
            
        <div className='container'>
            <h1 className='display-4'>Sign Up</h1>
            <p className='lead'>JOIN OUR TEAM FOR BUILDING STRONG MINDS, BODIES AND CHARACTER!!</p>
        </div>
          
      </div>

    <div className='container'>
        {/* added form and onSubmit function by Jayant Rai */}
      <form onSubmit={this.onSubmit}>
        <div className='col-1-3'>
        {/* input for firstName */}
        <div className='form-group' style={{ float: 'left', marginRight: '20px', clear: 'both' }}>
        <label>First Name:  </label>
              <input type='text' required className='form-control' value={this.state.firstName} onChange={this.onChangefirstName} />
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
            <DatePicker 
            selected={this.state.birthdate} onChange={this.onChangebirthdate} />
      </div>    
      
      <div className='form-group'>
        <input type='submit' value='Create Riders Log' className='btn btn-primary' />  
      </div>
      </div>  
       </form>
      </div>
      </div>
            
  // {/* <input type='text' name='name' id='first-name' placeholder='First Name' /> */}
         
          
//   {/* <div className='last-name' st
//               yle={{ float: 'left' }}>
//               <label for='last-name'>
//                 <input type='text' name='name' id='last-name' placeholder='Last Name' />
//               </label>
//             </div>
//   <br style={{ clear: 'both' }} />
//   <div className='e-mail'>
//               <label for='e-mail'>
//             <input type='tel' id='e-mail' name='email' placeholder='e-mail' style={{ width: '200%' }} />
//           </label>
//             </div>
//   <div className='pass'>
//               <label for='pass'>
//                 <input type='password' id='pass' name='pass' placeholder='Password' minlength='5' required style={{ width: '200%' }} />
//               </label>
//             </div>
// </div>

//   <div className='col-2-3 form-group form'>

//             <div className='drop-down'>
//               <p>Birthdate</p>
//               <input type='date' name='birthdate' style={{ display: 'block' }} />
//             </div><br />

//             <div className='gender'>
//               <p>Geneder</p>
//               <input type='radio' name='gender' value='Male' checked />Male<br />
//               <input type='radio' name='gender' value='Female' />Female<br />
//               <input type='radio' name='gender' value='Other' />Other
//             </div><br />
//             <div className='account-action'>
//               <input id='btn' type='submit' name='submit' value='Sign Up' />
//               <label>
//                 <input type='checkbox' name='remember' /> Stay signed in
//               </label>
//             </div>

//           </div>

//         </div> */}
    

    )
    }
}
