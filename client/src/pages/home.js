import React, { Component } from 'react'
import { NavBar } from '../components/navBar'
import { SignUp } from '../components/signUp'
import { Footer } from './../components/footer'

export class Home extends Component {
    handleSignIn = (body) => {
        console.log(body)
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