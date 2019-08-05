import React, { Component } from 'react'
import { NavBar } from '../components/navBar/navBar'
import { SignUp } from '../components/signUp/signUp'
import { Footer } from './../components/footer/footer'
import API from '../utils/API';
import Jumbotron from '../components/jumbotron/jumbotron';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogedIn: 'false',
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
            .then(res => (res.status === 200) ? alert("ok") : alert(res))
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
            .then(res => {
                if (res.status === 200) {
                    alert("from 200", res[1]);

                } else if (res.status === 400) {
                    alert("from 400", res[0])
                }

            })

        .catch(err => alert("error", err));

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