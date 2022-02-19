function hasTargetSum(array,target){
const container = {};
for (const numArray of array ){
  const compliment = target - numArray;

  if (container[compliment]) return true;

  container[numArray] = true; 
}

 return false 
}



// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++){
//     const container = target-array[i];
//     for (let j = i + 1; j < array.length; j++){
//       if (array[j] === container) {
//         return true; 
//       }
//       else {
//         return false;
//       }
//     }
//   }
// }
console.log(hasTargetSum([7,2,4,6,8],12));
// console.log(hasTargetSum([1,2,4,6],25));

// Write your algorithm here
/*
1. write a function has TargetSum that takes two array
2. The two array are array and Target
3. The array should have a set of numbers
4. if any two numbers in the array equal target array return true 

*/
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
