let str: string;

// the : number after the arguments means the the 'return' must be a number
function getsum(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(getsum(1, 2));

let mySum = function (num1: any, num2: any): number {
  if (typeof num1 == "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 == "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

// console.log(mySum(1, 4));

function getName(first: string, last?: string): string {
  if (last == undefined) {
    return first;
  }
  return first + " " + last;
}

console.log(getName("John"));
console.log(getName("John", "doe"));
