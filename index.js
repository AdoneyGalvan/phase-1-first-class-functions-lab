// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    const frstTwoDrivers = [];
    frstTwoDrivers.unshift(drivers[1]);
    frstTwoDrivers.unshift(drivers[0]);
    return frstTwoDrivers;
}

const returnLastTwoDrivers = (drivers) => {
    const lastTwoDrivers = [];
    lastTwoDrivers.unshift(drivers[drivers.length - 1]);
    lastTwoDrivers.unshift(drivers[drivers.length - 2]);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    return fare => fare * multiplier;
}

const fareDoubler = fare => {
    const fareMutiplier = createFareMultiplier(2);
    return fareMutiplier(fare);
};

const fareTripler = fare => {
    const fareMutiplier = createFareMultiplier(3);
    return fareMutiplier(fare);
};

const fareQuintupler = fare => {
    const fareMutiplier = createFareMultiplier(4);
    return fareMutiplier(fare);
};


const selectDifferentDrivers = (arrayOfDrivers, functionSelectDrivers) => {
    return functionSelectDrivers(arrayOfDrivers);
}