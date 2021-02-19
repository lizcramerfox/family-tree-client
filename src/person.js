import React, { Component } from 'react'

class Person extends Component {
  render () {
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
      <div className="person-profile">
        <img title={prefName} alt={prefName} src={photo}></img>
        <h2>{prefName} {lastName}</h2>
        <h5>born: {birthName}</h5>
        <p>b. {birthMonth}/{birthDay}/{birthYear} - {birthCity}, {birthState}, {birthCountry}</p>
        <p>d. {deathMonth}/{deathDay}/{deathYear} - {deathCity}, {deathState}, {deathCountry}</p>
      </div>
    )
  }   
}

export default Person