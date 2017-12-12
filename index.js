
class Driver {
  constructor(name, startDate){
    this.name = name,
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getUTCFullYear() - 1;
  }

}


let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(start, end){
    this.start = start,
    this.end = end
  }

  blocksTravelled(){
    // console.log(eastWest.indexOf(this.end.horizontal))
    // console.log(this.end.vertical)

    const horizontal = eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.start.horizontal);
    const vertical = this.end.vertical - this.start.vertical;
    return horizontal + vertical
  }


  estimatedTime(boolean){
    if (boolean) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
