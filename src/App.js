import PersonIndex from './PersonIndex';
import Home from './Home';
import './App.scss';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
 

function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Family Tree</h1>
        <nav>
          <ul><Link to="/">Home</Link></ul>
          <ul><Link to="/index">Index</Link></ul>  
        </nav>
      </header>
      <main className="App-body">
        <Route path="/" exact component={Home} />
        <Route path="/index" component={PersonIndex} />
      </main>
    </div>
  </Router>
  )
}  


export default App
