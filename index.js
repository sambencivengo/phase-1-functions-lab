// Code your solution in this file!
const HQ = 42;

function distanceFromHqInBlocks(cityBlock) {
    let result;
    // if cityBlock is higher than HQ, evaluate this conditional
    result = Math.abs(cityBlock - HQ);
    // if (cityBlock > HQ){
    //     result = cityBlock % HQ; 
    // // if cityBlock is lower than HQ, evaluate this conditional
    // } else {
    //     result = HQ % cityBlock;
    // }
    // return number of blocks as the result
    return result;
}

function distanceFromHqInFeet(cityBlock) {
    let numOfBlocks = distanceFromHqInBlocks(cityBlock);
    let result;
    let feet = 264;
    result = feet * numOfBlocks;
    return result;
}

function distanceTravelledInFeet(cityBlock1, cityBlock2){
    let result;
    let blocks = Math.abs(cityBlock1 - cityBlock2);
    console.log(Math.abs(cityBlock1 - cityBlock2));
    result = blocks * 264;
    return result;
}

function calculatesFarePrice(start, destination){
    let result;
    let feet = distanceTravelledInFeet(start, destination);
    // the first four hundred feet are free. ≈
    if (feet <= 400){
        result = 0;
    // For a distance between 400 and 2000 feet, the price is 2 cents per foot
    } else if (feet > 400 && feet < 2000) {
        result = (feet - 400) * .02;
    // for a distance between 2000 & 2500 charge a flta fair of 25
    } else if (feet > 2000 && feet < 2500) {
        result = 25;
    // no rides over 2500 feet
    } else {
        result = "cannot travel that far";
    }
    return result;
}