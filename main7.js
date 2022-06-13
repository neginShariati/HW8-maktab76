let animal = {
  speaks: true,
  walk() {
    console.log("Animal walks");
  },
};

let dog = {
  name: "White dog",
  __proto__: animal,
};

console.log(dog.speaks);
