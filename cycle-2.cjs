const cycle1 = require("./cycle-1.cjs")

exports.bar = 'i am cycle 2'

// this works:
// setTimeout(() => console.log(cycle1.foo), 0)

// this fails:
// $ node cycle-1.cjs                                                                                                                                            [22/10/17| 5:04PM]
// undefined
// i am cycle 2
// (node:33874) Warning: Accessing non-existent property 'foo' of module exports inside circular dependency
// (Use `node --trace-warnings ...` to show where the warning was created)
console.log(cycle1.foo)