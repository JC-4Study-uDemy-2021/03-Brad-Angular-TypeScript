var str;
// the : number after the arguments means the the 'return' must be a number
function getsum(num1, num2) {
    return num1 + num2;
}
// console.log(getsum(1, 2));
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum(1, 4));
function getName(first, last) {
    if (last == undefined) {
        return first;
    }
    return first + " " + last;
}
console.log(getName("John"));
console.log(getName("John", "doe"));
