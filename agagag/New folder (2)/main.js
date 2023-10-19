class Animal {
    #age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log("name make noise");
    }

    displayInfo() {
        console.log(`Adı: ${this.name}`);
        console.log(`Type: ${this.age}`);
        this.makeSound();
    }
}
class Cat extends Animal {
    makeSound() {
        console.log(`make noise`);
    }
}
class dog extends Animal {
    makeSound() {
        console.log("name make noise");
    }
}
class Lion extends Cat {
    speak() {
        console.log("lion roars");
    }
}
// const myAnimal = new Animal("dog", "dog");
// myAnimal.displayInfo();
let a = new Cat("cat", 19);
a.makeSound();
let b = new dog("dog", 19);
b.makeSound();
let c = new Animal("cat", 19)
c.makeSound();
let d = new Animal("dog", 19)
d.makeSound();
let l = new Cat("lion", 19)
l.makeSound();
let l1 = new Lion("lion", 19)
l1.speak();