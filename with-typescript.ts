// primitives

let age: number;

age = 10;

let word123: string;

word123 = "justin";

let isSomething: boolean;

isSomething = true;

let arr1: string[]; // string only values allowed in the array
let arr2: number[];

let obj1: {
  name: string;
  age: number;
  alive: boolean;
};

// array of objects
let objArr: {
  name: string;
  age: number;
  alive: boolean;
}[];

// Type Inference
// if you set initially as string i.e.
let text1 = "test  string";
// text1 = 123; // cannot change to number error!!

// multiple datatypes
let textNumber: string | number;

// Generics

//function func1(array: any[], value: any) {
function func1<T>(array: T[], value: T) {
  // What this means is that you are controlling the datatype to 1 type within the function but can be any datatype
  const newArray = [value, ...array];
  return newArray;
}

const demoArr = [1, 2, 3];

const updateArray = func1(demoArr, -1);

// updateArray[0].split(""); // split is not possible on numbers only string

// classes

class Student {
  //   name: string;
  //   age: number;
  //   address: string;
  //   courses: string[];

  //   constructor(name1: string, age1: number, address1: string, courses1: string[]) {
  //     this.name = name1;
  //     this.age = age1;
  //     this.address = address1;
  //     this.courses = courses1;
  //   }

  constructor(public name: string, private age: number, public address: string, public courses: string[]) {}

  enrol(courseName) {
    this.courses.push(courseName);
  }
}

const student = new Student("Max", 32, "flat 1", ["Angular"]);
student.enrol("test");

// Interfaces
interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: "Max",
  age: 32,
  greet() {
    console.log("Hello!");
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log("Hello!!!!");
  }
}
