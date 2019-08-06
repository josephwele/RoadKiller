import React, { Component } from 'react'
import { NavBar } from '../components/navBar/navBar'
import { RideInfo } from './../components/ridingInfo/rideInfo'

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
    handleOnChange = (event) => {
        alert("called")
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return ( < div >
            <
            RideInfo handleOnChange = { this.handleOnChange }
            / > < /
            div >
        )
    }
}

export default Detail