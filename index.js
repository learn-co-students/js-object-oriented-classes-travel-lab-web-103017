class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let testYear = new Date(year, 0, 0)
    return testYear.getYear() - this.startDate.getYear()
  }
}



class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let vertDistance = Math.abs(eastWest.indexOf(this.beginningLocation['horizontal']) - eastWest.indexOf(this.endingLocation['horizontal']))
    let horDistance = Math.abs(this.beginningLocation['vertical'] - this.endingLocation['vertical'])

    return vertDistance + horDistance
  }

  estimatedTime(boolean) {
    if (boolean) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
