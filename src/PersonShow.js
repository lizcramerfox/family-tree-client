import React, { Component } from 'react'

class PersonShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showProfile: false,
      person: null,
    }
  }

  render () {
    // TODO: make this DRY with PersonPreview
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

    return (
      <div 
        className={"person-profile modal"}
      >
        <img title={prefName} alt={prefName} src={photo}></img>
        <h2>{prefName} {lastName}</h2>
        <h5>born: {birthName}</h5>
        <p>b. {birthMonth}/{birthDay}/{birthYear} - {birthCity}, {birthState}, {birthCountry}</p>
        <p>d. {deathMonth}/{deathDay}/{deathYear} - {deathCity}, {deathState}, {deathCountry}</p>
        <button className="button" onClick={this.props.hideProfile}>Return to Index</button>
      </div>
    )
  }
}

export default PersonShow