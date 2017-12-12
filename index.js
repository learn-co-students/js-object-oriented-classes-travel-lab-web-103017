class Driver {
  constructor(name, dateString){
    this.name = name
    this.dateString = dateString
    this.startDate = new Date(this.dateString)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear() - 1
  }

}

class Route {
  constructor(begginingLocation, endingLocation){
    this.begginingLocation = begginingLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let v_blocks = Math.abs(parseInt(this.begginingLocation.vertical) - parseInt(this.endingLocation.vertical))
    console.log(v_blocks)

    let h_blocks = Math.abs((eastWest.indexOf(this.begginingLocation.horizontal) + 1) - (eastWest.indexOf(this.endingLocation.horizontal) + 1))
    console.log(h_blocks)

    // if (h_blocks > 0) {
    //   h_blocks *= -1
    // }

    return h_blocks + v_blocks
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
