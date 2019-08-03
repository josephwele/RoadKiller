import React, { Component } from 'react'
import { NavBar } from '../components/navBar/navBar'
import { SignUp } from '../components/signUp/signUp'
import { Footer } from './../components/footer/footer'
import API from '../utils/API';
import Jumbotron from '../components/jumbotron/jumbotron';

export class Home extends Component {
    handleSignIn = (event) => {
        console.log(event)
            //prevent submit
        API.signIN(event)
            .then(res => (res.status === 200) ? alert("ok") : console.log(res.json()))
            .catch(err => console.log(err))
    }
    handleSignUp = (data) => {
        console.log("from home page", data)
        API.signUp(data)
            .then(res => (res.status === 200) ? alert("ok") : console.log(res))
            .catch(err => console.error(err))
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