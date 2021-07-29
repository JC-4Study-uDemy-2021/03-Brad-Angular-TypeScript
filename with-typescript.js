// primitives
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var age;
age = 10;
var word123;
word123 = "justin";
var isSomething;
isSomething = true;
var arr1; // string only values allowed in the array
var arr2;
var obj1;
// array of objects
var objArr;
// Type Inference
// if you set initially as string i.e.
var text1 = "test  string";
// text1 = 123; // cannot change to number error!!
// multiple datatypes
var textNumber;
// Generics
//function func1(array: any[], value: any) {
function func1(array, value) {
    // What this means is that you are controlling the datatype to 1 type within the function but can be any datatype
    var newArray = __spreadArray([value], array);
    return newArray;
}
var demoArr = [1, 2, 3];
var updateArray = func1(demoArr, -1);
// updateArray[0].split(""); // split is not possible on numbers only string
// classes
var Student = /** @class */ (function () {
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
    function Student(name, age, address, courses) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    return Student;
}());
var student = new Student("Max", 32, "flat 1", ["Angular"]);
student.enrol("test");
var max;
max = {
    firstName: "Max",
    age: 32,
    greet: function () {
        console.log("Hello!");
    }
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log("Hello!!!!");
    };
    return Instructor;
}());
