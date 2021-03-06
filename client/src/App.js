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

    render() {
        return ((this.state.isLogedIn) ? < Detail handleRedirect = { this.handleRedirect }
            /  > : <
            Home handleRedirect = { this.handleRedirect }
            / >
        )
    }
}
export default App