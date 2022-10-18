// ESM uses "live bindings". The instantiation sets module exports pointing to
// the same location in memory for the modules that import them. Consuming
// modules are reading from the same place in memory where the exported module
// is loaded. Consuming modules can't change module exports - they're read only.
// 
// Unlike CommonJs - module exports are copied on export. this means that any
// values changed in the module during execution are not reflected in the
// export.
//
// see watch-me-change-exported-values.mjs
// 

export let myNumber = 1;

export function changeMe(){
  myNumber = 2;
}

