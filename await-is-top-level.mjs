// ESM allow await at the top level

async function foo(){
  console.log("hello");
}

await foo();