import React, { Component } from 'react'
import { personIndex } from './api'
import Person from './person'

class Tree extends Component {
  constructor () {
    super()

    this.state = {
      people: []
    }
  }

  componentDidMount() {
    personIndex()
      .then(res => {
        this.setState({
          people: Object.values(res.data.people),
        })
      })
  }
  
  render () {    
    const gen0 = (
      this.state.people
        .filter(person => person.generation === 0)
        .map(person => <Person key={person.id} person={person} generation={person.generation} />
      )
    )

    const gen1 = (
      this.state.people
        .filter(person => person.generation === 1)
        .map(person => <Person key={person.id} person={person} generation={person.generation} />
      )
    )

    const treeJsx = (
      <div className="tree">
        <div className="generation">{gen0}</div>
        <div className="generation">{gen1}</div>
      </div>
    )
    
    return treeJsx
  }
}

export default Tree