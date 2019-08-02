import React from 'react'
import { NavBar } from './components/navBar/navBar'

import { Footer } from './components/footer/footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/home'
import { Detail } from './pages/detail'

function App() {
    return ( <
        >
        <
        Router >
        <
        Switch >
        <
        Route exact path = '/'
        component = { Home }
        />  <
        Route exact path = '/login'
        component = { Detail }
        />< /
        Switch >
        <
        /Router> < / >



    )
}

export default App