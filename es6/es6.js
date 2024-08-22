'use strict'
document.getElementById("text").style.backgroundColor = "orange";

var nums = [1,2,3,4,5,6]
console.log(nums);

let new_nums = []
for(let i=0; i < nums.length; i++){
    new_nums[i] = nums[i]*2
}
console.log(new_nums);

const friends = ['john praise mbata']
console.log(friends[0].toUpperCase());
// for(var i = 0; i < friends.length; i++){
//     console.log(`${friends[i].toUpperCase}`);
// }

// declarative function
function studentInfo(name = "John", age = 20) {
console.log(`${name} is ${age} years old`);
}

studentInfo();
// anonymous function
var cold = function(){
    console.log('hot ')
}
cold()
// arrow function
let sum = (m, n) => m + n;
console.log(sum(3,2));

let square = (m, n) => m*n;
console.log(square(3, 2));

