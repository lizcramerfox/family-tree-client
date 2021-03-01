export function formatDate(day, month, year) {
  let date

  if (!day && !month && !year) {
    date = ''
  } else if (!day && !month) {
    date = `${year}`
  } else if (!day) {
    date = `${month}/${year}`
  } else {
    date = `${month}/${day}/${year}`
  }

  return date
}

export function formatPlace(city, state, country) {
  let place

  if (!city && !state && !country) {
    place = ''
  } else if (!city && !state) {
    place = `${country}`
  } else if (!city) {
    place = `${state}, ${country}`
  } else {
    place = `${city}, ${state}, ${country}`
  }

  return place
}

export function formatBirthName(person) {
  let firstMiddle, last

  if (person.middleName === '') {
    firstMiddle = `${person.firstName}`
  } else {
    firstMiddle = `${person.firstName} ${person.middleName}`
  }
  
  if (person.maidenName === '') {
    last = `${person.lastName}`
  } else {
    last = `${person.maidenName}`
  }
  
  return `${firstMiddle} ${last}`
} 

export function formatBirthDate(person) {
  return formatDate(person.birthDay, person.birthMonth, person.birthYear)
}

export function formatDeathDate(person) {
  return formatDate(person.deathDay, person.deathMonth, person.deathYear)
}

export function formatBirthPlace(person) {
  return formatPlace(person.birthCity, person.birthState, person.birthYear)
}

export function formatDeathPlace(person) {
  return formatPlace(person.deathCity, person.deathState, person.deathYear)
}

module.export = {
  formatBirthName,
  formatBirthDate,
  formatBirthPlace,
  formatDeathDate,
  formatDeathPlace,
}


  
