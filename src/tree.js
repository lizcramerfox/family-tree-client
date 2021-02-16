import React, { Component } from 'react'
import Person from './person'




class Tree extends Component {

  render () {
    let treeJsx

    treeJsx = (
      this.props.data.map(person => (
        <Person key={person.id} person={person} />
      ))
    )
    return treeJsx
  }
}

export default Tree