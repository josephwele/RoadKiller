import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import React, { Component } from 'react'
import { RideInfo } from './components/ridingInfo/rideInfo'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogedIn: false,
            Component: Home
        }
    }

    handleRedirect = () => {

        this.setState({ isLogedIn: !(this.state.isLogedIn) })
    }

    render() {
        return ((this.state.isLogedIn) ? < RideInfo /
            >
            : < Home handleRedirect = { this.handleRedirect }
            / >
        )
    }
}
export default App