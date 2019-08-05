import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import React, { Component } from 'react'

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
    if (isLogedIn) {
        this.setState({ Component: Detail })
    }
    render() {
        return ( < this.state.Component handleRedirect = { this.handleRedirect }
            / > )
        }
    }
    export default App