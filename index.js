const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
}

function appendKitten(name){
  return [name, ...kittens];
}

function prependKitten(name){
  return [...kittens, name];
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
