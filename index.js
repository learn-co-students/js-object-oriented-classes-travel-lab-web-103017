
class Driver {
  constructor(name, dateJoined) {
    this.name = name;
    this.startDate = new Date(dateJoined);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - (this.startDate).getFullYear() - 1;
  }
}

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let verticalDistanceTraveled = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let beginningLocationHorizontal = '';
    let endingLocationHorizontal = '';
    for (var i in eastWest) {
        if (eastWest[i] === this.beginningLocation.horizontal) {
          beginningLocationHorizontal =  parseInt(i) + 1
        }
    }
    for (var i in eastWest) {
        if (eastWest[i] === this.endingLocation.horizontal) {
          endingLocationHorizontal =  parseInt(i) + 1
        }
    }
    // let beginningLocationHorizontal = for (var i in eastWest) {
    //     if (eastWest[i] === this.beginningLocation.horizontal) {
    //       return i + 1
    //     }
    //   }
    // }
    let horizontalDistanceTraveled = Math.abs(beginningLocationHorizontal - endingLocationHorizontal);
    return verticalDistanceTraveled + horizontalDistanceTraveled;
  }
  estimatedTime(peak = false) {
    if (peak) {
      return (this.blocksTravelled()/ 2);
    } else {
      return (this.blocksTravelled()/3);
    }
  }
}
