import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class PersonPreview extends Component {
  constructor() {
    super()

    this.state = {
      person: [],
    }
  }

  // hideProfile = () => {
  //   this.setState({ showProfile: false })
  // }

  // onClick = () => {
  //   console.log(`PersonPreview onClick = `, this.props )
  //   <PersonShow person={this.props.person} />
  // } 

  render() {
    // TODO: make this DRY with PersonShow
    const { firstName, middleName, lastName, maidenName, prefName, birthYear, birthMonth, birthDay, birthCity, birthState, birthCountry, deathYear, deathMonth, deathDay, deathCity, deathState, deathCountry, photo } = this.props.person
    
    let firstMiddle, last

    if (middleName === '') {
      firstMiddle = `${firstName}`
    } else {
      firstMiddle = `${firstName} ${middleName}`
    }

    if (maidenName === '') {
      last = `${lastName}`
    } else {
      last = `${maidenName}`
    }

    const birthName = `${firstMiddle} ${last}`
    
    let previewJsx 
    
    previewJsx = (
      <Link to={`/profiles/${this.props.person.id}`}>
        <div 
          className="person-preview"
        >
          <img title={prefName} alt={prefName} src={photo}></img>
          <h2>{prefName} {lastName}</h2>
          <h5>born: {birthName}</h5>
          <p>b. {birthMonth}/{birthDay}/{birthYear} - {birthCity}, {birthState}, {birthCountry}</p>
          <p>d. {deathMonth}/{deathDay}/{deathYear} - {deathCity}, {deathState}, {deathCountry}</p>
        </div>
      </Link>
    )
    
    return (
      <Fragment>{previewJsx}</Fragment>
    )
  }   
}

export default PersonPreview