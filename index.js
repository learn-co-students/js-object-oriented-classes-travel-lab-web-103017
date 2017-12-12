class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear() - 1
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    // debugger
    let hEnd = 0
    let hBeg = 0
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    for (const i in eastWest) {
      if (eastWest[i] === this.beginningLocation.horizontal) {
        hBeg = i
      }
      if (eastWest[i] === this.endingLocation.horizontal) {
        hEnd = i
      }
    }
    let vert = this.endingLocation.vertical - this.beginningLocation.vertical

    let hor = hEnd - hBeg
    // debugger

    vert < 0 ? vert * -1 : vert
    hor < 0 ? hor * -1 : hor
    return vert + hor
  }

  estimatedTime(peak) {
    const time = this.blocksTravelled()
    if (peak) {
      return time/2
    } else {
      return time/3
    }
  }

}
