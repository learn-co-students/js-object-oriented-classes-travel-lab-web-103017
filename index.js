//
// Driver
// A driver can be initialized with a name, and a string representing the day that he joined Scuber. Add the following methods and attributes to the class:
// startDate — returns a JavaScript Date object. You'll need to use your Googling skills to reference some documentation on how dates work in JavaScript!
// yearsExperienceFromBeginningOf — takes an argument of a year and returns the number of years since the driver's startDate. (hint: when creating a new date object, you may want to refer to MDN's documentation on JS's Date object, specifically how to get a date at the beginning of the year)
// Route
// A route is initialized with two arguments, a beginningLocation and an endingLocation. Both of these arguments are JavaScript objects with an attributes of horizontal and vertical.
// blocksTravelled — returns an integer with the number of blocks travelled. In New
// York City, to travel East and West you cross avenues, and to travel North and
// South you cross streets. To calculate the distance of in streets, you can use
// subtraction (eg. 13th street to 10th street is three blocks). To calculate the
// distance of avenues travelled, you will need to the names and order of avenues in New
// York City. You can use the following array to help with your calculation:
class Driver
{
  constructor(name, dateJoined)
  {
    this.name = name;
    this.startDate = new Date(dateJoined);

  }

  yearsExperienceFromBeginningOf(endDate)
  {
   return endDate - this.startDate.getFullYear() - 1;
  }

}
class Route
{
  constructor(beginningLocation, endingLocation)
  {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled()
  {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue',
    'Park', 'Madison Avenue', '5th Avenue']
     let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
     let horizontalDistance = (eastWest.indexOf(this.endingLocation.horizontal) + 1) - (eastWest.indexOf(this.beginningLocation.horizontal) + 1)
     return horizontalDistance + verticalDistance

  }
  estimatedTime(isPeakHours)
  {
    let distance = this.blocksTravelled();
    if(isPeakHours)
    {
       return distance / 2;

    }else
    {
      return distance / 3;
    }
  }
}
