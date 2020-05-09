import React, { Component } from 'react'
import './event.css'
import EventInfo from '../EventInfo/EventInfo'


class Event extends Component {
  showInfo = () => {
    const { event , history  } = this.props
    sessionStorage.setItem('event', JSON.stringify(event))
    history.push({
      pathname: '/event'
    })
  }
  render () {
    const { event_title , event_date } = this.props
    return (
      <div className="event" onClick={this.showInfo}>
        <h2>{event_title}</h2>
        <p>{event_date}</p>
      </div>
    )
  }
}

export default Event