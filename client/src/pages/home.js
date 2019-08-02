import React, { Component } from 'react'
import { NavBar } from '../components/navBar/navBar'
import { SignUp } from '../components/signUp/signUp'
import { Footer } from './../components/footer/footer'
import API from '../utils/API';
import Jumbotron from '../components/jumbotron/jumbotron';

export class Home extends Component {
    handleSignIn = (event) => {
        //prevent submit
        event.preventDefault()
        API.signIN({
                userName: event.userName,
                password: event.password
            })
            .then(res => (res.status == 200) ? alert("ok") : alert("no"))
            .catch(err => console(err))
    }
    handleSignUp = (data) => {
        API.signUp(data)
            .then(res => (res.status == 200) ? alert("ok") : alert("no"))
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