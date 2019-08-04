import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import React from 'react'

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