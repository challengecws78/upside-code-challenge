const getTravelersAirline = require("./getTravelersAirline");

function getTravelersTrip(trip, travelerId, airlines, rewards) {
  return trip
    .filter(({ travelerIds }) => travelerIds.includes(travelerId))
    .map(({ legs }) => ({
      legs: getLegsOfTrip(legs, airlines, rewards),
    }));
}

function getLegsOfTrip(legs, airlines, rewards) {
  return legs.map(({ airlineCode, flightNumber }) => ({
    airlineCode,
    airlineName: getTravelersAirline(airlines, airlineCode),
    flightNumber,
    frequentFlyerNumber: rewards[airlineCode] ? rewards[airlineCode] : "",
  }));
}

module.exports = getTravelersTrip;
