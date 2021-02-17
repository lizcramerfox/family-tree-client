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
        <div className="gen-0">{gen0}</div>
        <div className="gen-1">{gen1}</div>
      </div>
    )

    
    return treeJsx
  }
}

export default Tree