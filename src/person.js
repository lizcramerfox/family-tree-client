import React, { Component } from 'react'

class Person extends Component {
  render () {
    const { firstName, middleName, lastName, maidenName, prefName, sex, birthYear, birthMonth, birthDay, birthCity, birthState, birthCountry, deathYear, deathMonth, deathDay, deathCity, deathState, deathCountry, generation } = this.props.person
    
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
        <h2>{prefName} {lastName}</h2>
        <h5>born: {birthName}</h5>
        <p>b. {birthMonth}/{birthDay}/{birthYear} - {birthCity}, {birthState}, {birthCountry}</p>
        <p>d. {birthMonth}/{birthDay}/{birthYear} - {deathCity}, {deathState}, {deathCountry}</p>
      </div>
    )
  }   
}

export default Person