class Driver {
  constructor(name, day) {
    this.name = name;
    this.startDate = new Date(day);
  }

  yearsExperienceFromBeginningOf(year) {
    let start = this.startDate;
    let end = new Date(year, 1, 1);
    let elapsed = end - start;
    let msecPerYear = (1000 * 60 * 60 * 24 * 365);
    let years = Math.floor(elapsed / msecPerYear);
    return years;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const beginningLocation = this.beginningLocation;
    const endingLocation = this.endingLocation;

    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    let vertical = Math.abs(beginningLocation.vertical - endingLocation.vertical);

    let horizontal = Math.abs(eastWest.findIndex(function(el) {return el === beginningLocation.horizontal}) - eastWest.findIndex(function(el){return el === endingLocation.horizontal}));
    return vertical + horizontal;
  }

  estimatedTime(peak) {
    let blocks = this.blocksTravelled()
    if (peak === true ) {
      return blocks / 2
    } else {
      return blocks / 3
    }
  }

}
