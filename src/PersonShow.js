import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import personShow from './api'
import { formatBirthName, formatBirthDate, formatBirthPlace, formatDeathDate, formatDeathPlace, } from './helpers'

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
      const { lastName, prefName, photo } = this.state.person
      const birthName = formatBirthName(this.state.person)
      const dob = formatBirthDate(this.state.person)
      const pob = formatBirthPlace(this.state.person)
      const dod = formatDeathDate(this.state.person)
      const pod = formatDeathPlace(this.state.person)

      return (
        <div className={"person-profile"}>
          <div>
            <img title={prefName} alt={prefName} src={photo}></img>
            <h2>{prefName} {lastName}</h2>
            <h5>born: {birthName}</h5>
            <p>b. {dob} - {pob}</p>
            <p>d. {dod} - {pod}</p>
            <Link to={"/index"}>
              <button>Return to Index</button>
            </Link>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(PersonShow)