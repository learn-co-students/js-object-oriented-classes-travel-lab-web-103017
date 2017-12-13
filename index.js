class Driver{

  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return (endDate - this.startDate.getFullYear() - 1)
  }

}

class Route{

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  aveInt(ave){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return eastWest.indexOf(ave)
  }

  blocksTravelled(){

    let vert = this.endingLocation.vertical - this.beginningLocation.vertical
    let hori = this.aveInt(this.endingLocation.horizontal) - this.aveInt(this.beginningLocation.horizontal)

    return (Math.abs(vert) + Math.abs(hori))
  }

  estimatedTime(peak = false){
    switch (peak) {
      case true:
        return this.blocksTravelled()/2
      default:
        return this.blocksTravelled()/3
    }
  }


}
