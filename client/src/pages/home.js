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
    }
    handleSignUp = (data) => {
        console.log(data)
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