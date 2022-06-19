// Code your solution in this file!
//Returns the number of blocks from Scuber's headquaters to the pickup location 
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  
  }
  
  //Returns the number of feet from Scuber's headquaters to the pickup location 
  function distanceFromHqInFeet(blocks) {
    const distanceFromHqInFeet = distanceFromHqInBlocks(blocks) * 264;
    return distanceFromHqInFeet;
  }
  
  //Calculate the number of feet a passenger travels given a starting block and an ending block
  function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
      let distanceTravelled = destination - start;
      let distanceTravelledInFeet = distanceTravelled * 264;
      return distanceTravelledInFeet;
    } else {
      return (start - destination) * 264;
    }
  }
  
  //calculate fare prices
  const calculatesFarePrice = (start, destination) => {
      const distance = distanceTravelledInFeet(start, destination);
      if (distance <= 400) {
          return 0;
      } else if (distance > 400 && distance <=2000) {
          return (distance - 400) * 0.02;
      } else if (distance > 2000 && distance <= 2500) {
          return 25;
      } else {
          return 'cannot travel that far';
      }
  }