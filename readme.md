# ES Modules import examples for Node

This repo contains a few examples I wanted to try out after reading [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/). The 2018 article was helpful for me to understand how ES Modules work when compared to Common JS.

ESM loading allows some interesting uses:
* `await` can be used at the top level.
* "live bindings" allow modules to read from the exact location in memory as the exported module is stored.
* As of Node v12.x, Node will process `.mjs` files as ES Modules, `.js` and `.cjs` as Common JS. 

Common JS copies module exports to a new memory location. The article shows an example of how this can impact referencing module state.

Finally, because of the ESM loading process, cyclic refereces are no longer an issue. Note, I could reproduce the cyclic issue in Common JS, but the issue was also present in the ES Module, contrary to what the article suggests.
