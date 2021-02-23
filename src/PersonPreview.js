import React, { Component, Fragment } from 'react'
import personShow from './api'
import PersonShow from './PersonShow'

class PersonPreview extends Component {
  constructor() {
    super()

    this.state = {
      showProfile: false,
      person: [],
    }
  }

  showProfile = () => {
    this.setState({ showProfile: true })
    personShow(this.props.person.id)
      .then(res => {
        this.setState({
          person: Object.values(res.data.person),
        })
      })

  }

  hideProfile = () => {
    this.setState({ showProfile: false })
  }

  
  render () {
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

    let personJsx

    if (!this.state.showProfile) {
      personJsx = (
        <div 
        className="person-preview"
        onClick={this.showProfile}
        >
          <img title={prefName} alt={prefName} src={photo}></img>
          <h2>{prefName} {lastName}</h2>
          <h5>born: {birthName}</h5>
          <p>b. {birthMonth}/{birthDay}/{birthYear} - {birthCity}, {birthState}, {birthCountry}</p>
          <p>d. {deathMonth}/{deathDay}/{deathYear} - {deathCity}, {deathState}, {deathCountry}</p>
        </div>
      )
    } else {
      personJsx = <PersonShow person={this.props.person} hideProfile={this.hideProfile} />
    }

    return (
      <Fragment>{personJsx}</Fragment>
    )
  }   
}

export default PersonPreview