// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    // console.log('Callback: I have the data!')
    // if (!error) {callback(data)}; 
   callback(data); 
  });
}

// we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay) // => will NOT print out details, instead we will see undefined!
module.exports = breedDetailsFromFile;