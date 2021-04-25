// Libraries
import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

// Styles
import './App.css';

const App = () => {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

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

        <Route path='/' exact>Talks</Route>
        <Route path='/details/:id'>Details</Route>
        <Route path='/speakers/' exact>Speakers</Route>
        <Route path='/speakers/:id'>Speaker</Route>
      </div>
    </Router>
  );
}

export default App;
