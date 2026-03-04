// Basics of objects
const person = {
    name:"varshith",
    age : 23,
    isStudent:true,

};

console.log(person);
console.log(person.name);
console.log(person["age"]);

person.age = 24;
console.log(person.age);
person["name"]="venka";
console.log(person);

delete person.isStudent;
console.log(person);

// object constructor
const car = new Object();
car.make = "audi";
car.model = "A";
car.year = 2025;
console.log(car);

   