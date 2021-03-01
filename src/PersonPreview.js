import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getBirthName, getBirthDate, getBirthPlace, getDeathDate, getDeathPlace, } from './helpers'

class PersonPreview extends Component {
  render() {
    let previewJsx 

    if (!this.props.person) {
      previewJsx = <p>"Loading..."</p>
    }

    if (this.props.person) {
      const { lastName, prefName, photo } = this.props.person
      const birthName = getBirthName(this.props.person)
      const dob = getBirthDate(this.props.person)
      const pob = getBirthPlace(this.props.person)
      const dod = getDeathDate(this.props.person)
      const pod = getDeathPlace(this.props.person)
      
      previewJsx = (
        <Link to={`/profiles/${this.props.person.id}`}>
          <div className="person-preview">
            <img title={prefName} alt={prefName} src={photo}></img>
            <h2>{prefName} {lastName}</h2>
            <h5>born: {birthName}</h5>
            <p>b. {dob} - {pob}</p>
            <p>d. {dod} - {pod}</p>
          </div>
        </Link>
      )
    }
    
    return <Fragment>{previewJsx}</Fragment>
  }
}

export default PersonPreview