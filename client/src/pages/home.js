import React from 'react'
import { NavBar } from '../components/navBar/navBar'
import { SignUp } from '../components/signUp/signUp'
import { Footer } from './../components/footer/footer'
import API from '../utils/API';
import Jumbotron from '../components/jumbotron/jumbotron';


export class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            pass: '',
            birthdate: '',
            gender: ''
        }
    }
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignIn = (event) => {
        //prevent submit
        alert("signin clicked")
        API.signIN({
                email: this.state.email,
                pass: this.state.pass
            })
            .then(res => res.json())
            .then(res => { this.props.handleRedirect() })
            .catch(err => console.log(err))
    }
    handleSignUp = (event) => {
        event.preventDefault()
        alert("clicked")
        API.signUp({
                email: this.state.email,
                pass: this.state.pass
            })
            .then(res => res.json())
            .then(res => { this.props.handleRedirect() })

        .catch(err => console.log(err));

    }
    render() {
        return ( < div >
            <
            NavBar handleOnChange = { this.handleOnChange }
            handleSignIn = { this.handleSignIn }
            / >  <
            Jumbotron / >
            <
            SignUp handleOnChange = { this.handleOnChange }
            handleSignUp = { this.handleSignUp }
            / > <
            Footer / >
            <
            /div>
        )
    }
}