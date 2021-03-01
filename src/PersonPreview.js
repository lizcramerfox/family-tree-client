import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { formatBirthName, formatBirthDate, formatBirthPlace, formatDeathDate, formatDeathPlace, } from './helpers'

class PersonPreview extends Component {
  render() {
    let previewJsx 

    if (!this.props.person) {
      previewJsx = <p>"Loading..."</p>
    }

    if (this.props.person) {
      const { lastName, prefName, photo } = this.props.person
      const birthName = formatBirthName(this.props.person)
      const dob = formatBirthDate(this.props.person)
      const pob = formatBirthPlace(this.props.person)
      const dod = formatDeathDate(this.props.person)
      const pod = formatDeathPlace(this.props.person)
      
      previewJsx = (
        <div className="person-preview">
          <Link to={`/profiles/${this.props.person.id}`}>
            <img title={prefName} alt={prefName} src={photo}></img>
            <h2>{prefName} {lastName}</h2>
            <h5>born: {birthName}</h5>
            <p>b. {dob} - {pob}</p>
            <p>d. {dod} - {pod}</p>
          </Link>
        </div>
    )
  }
    
    return <Fragment>{previewJsx}</Fragment>
  }
}

export default PersonPreview