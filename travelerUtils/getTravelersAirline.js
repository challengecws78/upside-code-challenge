/**
 * NOTE: Yeah this file ended up being a lot shorter than expected
 * but I do want to keep the airline and trip functions seperate
 */
function getTravelersAirline(airlines, airlineCode) {
    const airline = airlines.find(({ code }) => code === airlineCode);
    return airline.name;
}

module.exports = getTravelersAirline;
