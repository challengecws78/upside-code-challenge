"use strict";
const Trip = require("./api/trip.service");
const Profiles = require("./api/profiles.service");
const Airlines = require("./api/airlines.service");
const getTravelersTrip = require("./travelerUtils/getTravelersTrip");

//this was only for testing purposes
const util = require("util");

async function getTravelersFlightInfo() {
  const promises = [Trip.get(), Profiles.get(), Airlines.get()];
  const [tripData, profilesData, airlinesData] = await Promise.all(promises)
  const { trip } = tripData;
  const { profiles } = profilesData;
  const { airlines } = airlinesData;
  const travelers = profiles.reduce((acc, profile) => {
    const { personId, name, rewardPrograms: { air } } = profile;
    const flights = getTravelersTrip(trip.flights, personId, airlines, air);
    acc.push({
      id: personId,
      name,
      flights,
    });
    return acc;
  }, []);

  return { travelers }
}

/**
 * What I used to test out my promise
 */
getTravelersFlightInfo().then(data => console.log(util.inspect(data, false, null, true)))


module.exports = getTravelersFlightInfo;
