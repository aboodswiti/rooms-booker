import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Rooms from './components/Layout/Rooms/Rooms.js'
import Header from './components/Common/Header/Header'
import Login from './components/Layout/Login/Login.js'
import Events from './components/Layout/Events/Events'
import UserHome from './components/Layout/UserHome/UserHome'
import BookingForm from './components/Common/BookingForm/BookingForm'

function App () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path = '/' component={Events}/>
        <Route exact path="/home" component={UserHome} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/booking" component={BookingForm} />
      </Switch>
    </Router>
  )
}
export default App
