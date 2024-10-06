// Basic Object
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(person.name); // John
person.greet(); // Hello, my name is John

// Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John", 30);
john.greet(); // Hello, my name is John

// Car class with methods and properties
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.make} ${this.model} is now going ${this.speed} mph`);
  }

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`${this.make} ${this.model} slowed down to ${this.speed} mph`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.accelerate(30);
myCar.brake(10);

// Encapsulation
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100

// Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks.

// Polymorphism
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

function printArea(shape) {
  console.log(`Area: ${shape.area()}`);
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 5);

printArea(circle); // Area: 78.53981633974483
printArea(rectangle); // Area: 20

// Abstraction
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return "Vehicle started";
  }

  stop() {
    return "Vehicle stopped";
  }
}

class Car extends Vehicle {
  start() {
    return `${this.make} ${this.model} engine started`;
  }
}

const myNewCar = new Car("Toyota", "Corolla");
console.log(myNewCar.start()); // Toyota Corolla engine started
console.log(myNewCar.stop()); // Vehicle stopped

// Getters and Setters
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(value) {
    this._celsius = ((value - 32) * 5) / 9;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero is not possible");
    }
    this._celsius = value;
  }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77
temp.fahrenheit = 86;
console.log(temp.celsius); // 30

// Object Freezing, Sealing, and Preventing Extensions
const frozenObj = Object.freeze({
  prop: 42,
});
frozenObj.prop = 33; // Fails silently in non-strict mode
console.log(frozenObj.prop); // 42

const sealedObj = Object.seal({
  prop: 42,
});
sealedObj.prop = 33; // This works
sealedObj.newProp = "new"; // This fails silently in non-strict mode
console.log(sealedObj.prop); // 33
console.log(sealedObj.newProp); // undefined

const nonExtensibleObj = Object.preventExtensions({
  prop: 42,
});
nonExtensibleObj.prop = 33; // This works
nonExtensibleObj.newProp = "new"; // This fails silently in non-strict mode
console.log(nonExtensibleObj.prop); // 33
console.log(nonExtensibleObj.newProp); // undefined

// Library Management System
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }

  checkout() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return true;
    }
    return false;
  }

  return() {
    this.isAvailable = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBookByISBN(isbn) {
    return this.books.find((book) => book.isbn === isbn);
  }

  checkoutBook(isbn) {
    const book = this.findBookByISBN(isbn);
    if (book) {
      return book.checkout();
    }
    return false;
  }

  returnBook(isbn) {
    const book = this.findBookByISBN(isbn);
    if (book) {
      book.return();
      return true;
    }
    return false;
  }

  get availableBooks() {
    return this.books.filter((book) => book.isAvailable);
  }
}

// Usage of Library Management System
const library = new Library();

library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "9780446310789"));

console.log(library.availableBooks.length); // 2

library.checkoutBook("9780743273565");

console.log(library.availableBooks.length); // 1

library.returnBook("9780743273565");

console.log(library.availableBooks.length); // 2
