class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 0)
    return endDate.getYear() - this.startDate.getYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let acc = 0
    let startNorth = parseInt(this.beginningLocation.vertical)
    let endNorth = parseInt(this.endingLocation.vertical)
    let northSouth = endNorth - startNorth

    let startWest = parseInt(eastWest.indexOf(this.beginningLocation.horizontal))
    let endWest = parseInt(eastWest.indexOf(this.endingLocation.horizontal))
    let eWest = endWest - startWest

    acc += northSouth
    acc += eWest
    return acc
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }
}
