import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getBirthName, formatDate, formatPlace } from './helpers'


class PersonPreview extends Component {
  constructor() {
    super()

    this.state = {
      person: [],
    }
  }

  render() {
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

      let previewJsx
      
      previewJsx = (
        <Link to={`/profiles/${this.props.person.id}`}>
          <div 
            className="person-preview"
          >
            <img title={prefName} alt={prefName} src={photo}></img>
            <h2>{prefName} {lastName}</h2>
            <h5>born: {birthName}</h5>
            <p>b. {dob} - {pob}</p>
            <p>d. {dod} - {pod}</p>
          </div>
        </Link>
      )
    
      return (
        <Fragment>{previewJsx}</Fragment>
      )
    }
  }   
}

export default PersonPreview