import React, { Component, Fragment } from 'react'
import { personIndex } from './api'
import PersonPreview from './PersonPreview'

class PersonIndex extends Component {
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
          people: res.data.people,
        })
      })
  }
  
  render () {    
    

    const gen0 = (
      this.state.people
        .filter(person => person.generation === 0)
        .map(person => <PersonPreview key={person.id} person={person} generation={person.generation} onClick={this.onClick}/>
      )
    )

    const gen1 = (
      this.state.people
        .filter(person => person.generation === 1)
        .map(person => <PersonPreview key={person.id} person={person} generation={person.generation} onClick={this.onClick} />
      )
    )

    const treeJsx = (
      <Fragment>
        <div className="generation">{gen0}</div>
        <div className="generation">{gen1}</div>
      </Fragment>
    )
    
    return treeJsx
  }
}

export default PersonIndex