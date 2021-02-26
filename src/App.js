import PersonIndex from './PersonIndex'
import PersonShow from './PersonShow'
import Home from './Home'
import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
 

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/index" component={PersonIndex} />
          <Route exact path="/profiles/:id" render={(data) => (
            <PersonShow id={data.match.params.id} />
          )} />
        </Switch>
      </main>
    </div>
  </Router>
  )
}  

export default App
