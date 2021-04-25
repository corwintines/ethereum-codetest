// Libraries
import React, { useEffect, useState } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

// Contexts
import { EventContext } from './contexts/EventContext'
import { FavoritesContext } from './contexts/FavoritesContext'
import { RoomsContext } from './contexts/RoomsContext'
import { SpeakersContext } from './contexts/SpeakersContext'
import { TalksContext } from './contexts/TalksContext'

// Styles
import './App.css';

// Utils
import { fetchEvent } from './utils/fetchEvent'
import { fetchRooms } from './utils/fetchRooms'
import { fetchSpeakers } from './utils/fetchSpeakers'
import { fetchTalks } from './utils/fetchTalks'

const App = () => {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  const [event, setEvent] = useState({})
  const [favorites, setFavorites] = useState({})
  const [rooms, setRooms] = useState([])
  const [speakers, setSpeakers] = useState([])
  const [talks, setTalks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const fetchedEvent = await fetchEvent()
      await setEvent(fetchedEvent)
      const fetchedRooms = await fetchRooms()
      await setRooms(fetchedRooms)
      const fetchedSpeakers = await fetchSpeakers()
      await setSpeakers(fetchedSpeakers)
      const fetchedTalks = await fetchTalks()
      await setTalks(fetchedTalks)
    }
    fetchData()
  }, [])

  return (
    <Router>
      <div>
        <nav>
          <h2>Democon</h2>
          <ul className='navLinks'>
            <li>
              <Link style={navStyle} to='/'>Talks</Link>
            </li>
            <li>
              <Link style={navStyle} to='/speakers/'>Speakers</Link>
            </li>
          </ul>
        </nav>
        <EventContext.Provider value={{event, setEvent}}>
          <FavoritesContext.Provider value={{favorites, setFavorites}}>
            <RoomsContext.Provider value={{rooms, setRooms}}>
              <SpeakersContext.Provider value={{speakers, setSpeakers}}>
                <TalksContext.Provider value={{talks, setTalks}}>
                  <Route path='/' exact>Talks</Route>
                  <Route path='/details/:id'>Details</Route>
                  <Route path='/speakers/' exact>Speakers</Route>
                  <Route path='/speakers/:id'>Speaker</Route>
                </TalksContext.Provider>
              </SpeakersContext.Provider>
            </RoomsContext.Provider>
          </FavoritesContext.Provider>
        </EventContext.Provider>
       
      </div>
    </Router>
  );
}

export default App;
