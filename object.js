const person = {
    name: "John",
    age: 30,
    isEmployed: true,
};

//Using new Object()

const person1 = new Object();
person1.name = "John";
person1.age = 30;
person1.isEmployed = true;

//Using a Constructor Function

function Person2(name, age, isEmployed) {
    this.name = name;
    this.age = age;
    this.isEmployed = isEmployed;
}
const john = new Person2("John", 30, true);

