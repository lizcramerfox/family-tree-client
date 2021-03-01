import PersonIndex from './PersonIndex'
import PersonShow from './PersonShow'
import Home from './Home'
import Header from './Header'
import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
 

function App() {
  return (
  <Router>
    <div className="App">
      <header>
       <Header />
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
