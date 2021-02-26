import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import personShow from './api'

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
      // TODO: make this DRY with PersonPreview
      const { firstName, middleName, lastName, maidenName, prefName, birthYear, birthMonth, birthDay, birthCity, birthState, birthCountry, deathYear, deathMonth, deathDay, deathCity, deathState, deathCountry, photo } = this.state.person

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
          className={"person-profile"}
        >
          <button className="button">Return to Index</button>
          <div>
            <img title={prefName} alt={prefName} src={photo}></img>
            <h2>{prefName} {lastName}</h2>
            <h5>born: {birthName}</h5>
            <p>b. {birthMonth}/{birthDay}/{birthYear} - {birthCity}, {birthState}, {birthCountry}</p>
            <p>d. {deathMonth}/{deathDay}/{deathYear} - {deathCity}, {deathState}, {deathCountry}</p>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(PersonShow)