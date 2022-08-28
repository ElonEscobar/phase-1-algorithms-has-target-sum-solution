function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set(); 
  for (const number of array) {
    const complement = target - number;

    // .has r
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  initialize an empty Set
  iterate through the array 
  initialize complement 
  add number to the set
  return true if the Set includes the complement
  else return false

*/

/*
  Add written explanation of your solution here
  initialize an empty Set to store number gone through from the array
  iterate through the array 
  initialize complement by subtracting a number inthe array from the target
  add number to the set
  return true if the Set includes the complement, else return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
