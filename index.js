class Driver {
  constructor(name, joinDate){
    this.name = name;
    this.startDate = new Date(joinDate);
  };

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear() - 1
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let sum  = 0
    let vert = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    let hor = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))

    sum += vert
    sum += hor
    return sum
  };

  estimatedTime(rush = false){
    let route1 = new Route(this.beginningLocation, this.endingLocation)
    if (rush){
      return route1.blocksTravelled()/2
    }
    else {
      return route1.blocksTravelled()/3
    }
  }

}
