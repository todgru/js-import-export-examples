import {foo} from './cycle-1.mjs'

export const bar = 'i am cycle 2'

// this works:
// setTimeout(() => console.log(cycle1.foo), 0)

// this fails:
// ReferenceError: Cannot access 'foo' before initialization
console.log(foo)