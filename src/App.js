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

// Modules
import Details from './modules/Details/Details'
import Speaker from './modules/Speaker/Speaker'
import Speakers from './modules/Speakers/Speakers'
import Talks from './modules/Talks/Talks'

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
  const [loading, setLoading] = useState(false)
  const [rooms, setRooms] = useState([])
  const [speakers, setSpeakers] = useState([])
  const [talks, setTalks] = useState([])

  useEffect(() => {
    async function fetchData() {
      await setLoading(true)
      const fetchedEvent = await fetchEvent()
      await setEvent(fetchedEvent)
      const fetchedRooms = await fetchRooms()
      await setRooms(fetchedRooms)
      const fetchedSpeakers = await fetchSpeakers()
      await setSpeakers(fetchedSpeakers)
      const fetchedTalks = await fetchTalks()
      await setTalks(fetchedTalks)
      await setLoading(false)
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
        {
          loading ? <div className='lds-dual-ring' /> : (
            <EventContext.Provider value={{event, setEvent}}>
              <FavoritesContext.Provider value={{favorites, setFavorites}}>
                <RoomsContext.Provider value={{rooms, setRooms}}>
                  <SpeakersContext.Provider value={{speakers, setSpeakers}}>
                    <TalksContext.Provider value={{talks, setTalks}}>
                      <Route path='/' exact component={Talks} />
                      <Route path='/details/:id' component={Details} />
                      <Route path='/speakers/' exact component={Speakers} />
                      <Route path='/speakers/:id' component={Speaker} />
                    </TalksContext.Provider>
                  </SpeakersContext.Provider>
                </RoomsContext.Provider>
              </FavoritesContext.Provider>
            </EventContext.Provider>
          )
        }
      </div>
    </Router>
  );
}

export default App;
