class Driver{
  constructor(name, startdate){
    this.name = name;
    this.startDate = new Date(startdate)
  }

  yearsExperienceFromBeginningOf(){
    return 2016 - (1900 + this.startDate.getYear())
  }
}

class Route{
  constructor(beg, end){
    this.beginningLocation = beg;
    this.endingLocation = end;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalDist = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let horizontalDist = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    return verticalDist + horizontalDist;
  }

  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled() / 2;
    }
    else{
      return this.blocksTravelled() / 3;
    }
    r
  }
}
