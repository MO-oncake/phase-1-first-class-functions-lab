// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return (drivers.slice(0, 2))
}

const returnLastTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return (drivers.slice(2, 4))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integerValue) {
    return function(fare) {
        return fare * integerValue;
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}

// const selectDifferentDrivers = function(drivers, returnLastTwoDrivers) {
//     return returnLastTwoDrivers(drivers)
// }