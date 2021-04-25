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


  return (
    <Router>
      <div>
        <nav>
          <h2>Democon</h2>
          <ul>
            <li>
              <Link to='/'>Talks</Link>
            </li>
            <li>
              <Link to='/speakers/'>Speakers</Link>
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
