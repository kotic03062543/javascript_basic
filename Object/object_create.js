const animal = {
  type: "mammal",
  makeSound() {
    console.log("Some sound...");
  },
};

const dog = Object.create(animal);
dog.name = "Buddy";
dog.makeSound(); // "Some sound..."
console.log(dog.type); // "mammal"
