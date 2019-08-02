import React, { Component } from 'react'
import { NavBar } from '../components/navBar'
import { SignUp } from '../components/signUp'
import { Footer } from './../components/footer'
import API from '../utils/API';
import Jumbotron from '../components/jumbotron/jumbotron';

export class Home extends Component {
    handleSignIn = (event) => {
        event.preventDefault()
        API.signIN({
                userName: event.userName,
                password: event.password
            })
            .then(res => res.json())
            .then(res =>
                console.log(res))
    }
    handleSignUp = (data) => {
        API.signUp(data)
    }
    render() {
        return ( < div >
            <
            NavBar handleSignIn = { this.handleSignIn }
            / >  <
            Jumbotron / >
            <
            SignUp handleSignUp = { this.handleSignUp }
            / > <
            Footer / >
            <
            /div>
        )
    }
}