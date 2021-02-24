import PersonIndex from './PersonIndex';
import Home from './Home';
import './App.scss';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 

function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Family Tree</h1>
      </header>
      <main className="App-body">
        <Route path="/" component={Home} />
      </main>
    </div>
  </Router>
  )
}  


export default App
