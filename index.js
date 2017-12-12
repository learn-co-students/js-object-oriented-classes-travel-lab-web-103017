class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
   let endDate = new Date(year, 1, 1)
   let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
   return parseInt(totalYears)
 }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }


  blocksTravelled(){
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const beginningHorizontal = eastWest.indexOf(this.beginningLocation.horizontal)
    const beginningVertical = this.beginningLocation.vertical

    const endingHorizontal = eastWest.indexOf(this.endingLocation.horizontal)
    const endingVertical = this.endingLocation.vertical

    let horizontalDistance = endingHorizontal - beginningHorizontal
    let verticalDistance = endingVertical - beginningVertical

    return horizontalDistance + verticalDistance
  }

  estimatedTime(peak = false){
    let blockPerMinute = function(peak){
      if(peak == true){
        return 2
      } else{
        return 3
      }
    }

    return this.blocksTravelled()/blockPerMinute(peak)

  }

}
