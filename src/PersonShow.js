import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import personShow from './api'
import { getBirthName, formatDate, formatPlace } from './helpers'

class PersonShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: null
    }
  }

  componentDidMount() {
    personShow(this.props.id)
    .then(res => {
      this.setState({
        person: res.data.person,
      })
    })
  }
  
  render () {
    if (!this.state.person) {
      return <p>"Loading..."</p>
    } 
    
    if (this.state.person) {
      const { 
        lastName, 
        prefName, 
        birthYear, 
        birthMonth, 
        birthDay, 
        birthCity, 
        birthState, 
        birthCountry, 
        deathYear, 
        deathMonth, 
        deathDay, 
        deathCity, 
        deathState, 
        deathCountry, 
        photo 
      } = this.state.person
      
      const birthName = getBirthName(this.state.person)
      const dob = formatDate(birthDay, birthMonth, birthYear)
      const pob = formatPlace(birthCity, birthState, birthCountry)
      const dod = formatDate(deathDay, deathMonth, deathYear)
      const pod = formatPlace(deathCity, deathState, deathCountry)

      return (
        <div 
          className={"person-profile"}
        >
          <button className="button">Return to Index</button>
          <div>
            <img title={prefName} alt={prefName} src={photo}></img>
            <h2>{prefName} {lastName}</h2>
            <h5>born: {birthName}</h5>
            <p>b. {dob} - {pob}</p>
            <p>d. {dod} - {pod}</p>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(PersonShow)