import React, { Component } from 'react'
import Person from './person'




class Tree extends Component {

  render () {    
    
    const gen0 = (
      this.props.people
        .filter(person => person.generation === 0)
        .map(person => <Person key={person.id} person={person} generation={person.generation} />
      )
    )

    const gen1 = (
      this.props.people
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