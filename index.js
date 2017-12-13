


class Driver {
  constructor(name, date){
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year){
    return (year - 1) - this.startDate.getFullYear()
  }

}

class Route {
  constructor(start, end){
    this.start = start
    this.end = end
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let horizonalD = eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.start.horizontal)
    let verticalD = this.end.vertical - this.start.vertical

    return horizonalD + verticalD
  }

  estimatedTime(peak = false){
    let dist = this.blocksTravelled()
    if (!!peak){
      return dist / 2
    } else {
      return dist / 3
    }
  }


}
