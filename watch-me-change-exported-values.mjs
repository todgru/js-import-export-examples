import * as test from "./i-can-change-my-exported-values.mjs";

console.log(test.myNumber)
test.changeMe()
console.log(test.myNumber)

// TypeError: Cannot assign to read only property 'myNumber' of object '[object Module]'
//
// test.myNumber = 666;
