import React, { Component } from 'react'
import { NavBar } from '../components/navBar'
import { SignUp } from '../components/signUp'
import { Footer } from './../components/footer'
import API from '../utils/API';

export class Home extends Component {
    handleSignIn = (userName, password) => {
        API.signIN({
            userName: userName,
            password: password
        })
    }
    render() {
        return ( < div >
            <
            NavBar handleSignIn = { this.handleSignIn }
            / > <
            SignUp / >
            <
            Footer / >
            <
            /div>
        )
    }
}