import React from 'react'
import { NavBar } from './components/navBar.jsx'
import { Footer } from './components/footer.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/home'
import { detail } from './pages/detail'

function App() {
    return ( <
        >
        <
        NavBar / >
        <
        Router >
        <
        Switch >
        <
        Route exact path = '/'
        component = { Home }
        /> < /
        Switch >
        <
        /Router> < / >



    )
}

export default App