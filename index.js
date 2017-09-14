const app = "I don't do much."


function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten () {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
  return kittens;
}

function appendKitten (name) {
  newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten (name) {
  newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten () {
  newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function removeFirstKitten () {
  newKittens = kittens.slice(1);
  return newKittens;
}
