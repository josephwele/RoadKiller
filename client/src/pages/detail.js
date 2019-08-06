import React, { Component } from 'react'
import { NavBar } from '../components/navBar/navBar'
import { RideInfo } from './../components/ridingInfo/rideInfo'
import API from '../utils/API';

export class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start: '',
            destination: '',
            phonenum: '',
            date: '',
            time: ''

        }
    }
    handleSignout = () => {
        alert('signout')
        API.logOut()
            .then(res => { this.props.handleRedirect() })

    }
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        API.saveInfo(this.state)
    }
    render() {
        return ( < div >
            <
            RideInfo handleOnChange = { this.handleOnChange }
            handleSignout = { this.handleSignout }
            / > < /
            div >
        )
    }
}

export default Detail