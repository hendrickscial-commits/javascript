function sum(n) {
  if (typeof n !== "number" || Math.floor(n) !== n) {
    return "The value is not a number";
  } 
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += 1;
  }
  return total;
}

console.log(sum(6));
console.log(sum("Hello"));

function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  console.log(result);
}

factorial(5);

function funkyMath() {
  if (arguments.length === 2) {
    return argumments[1] - arguments[0];
  } else if (arguments.length --- 3) {
    return arguments[0] + arguments[1] + arguments[2];
  } else if (arguments.lenth === 4) {
    const sum1 = arguments[0] + arguments[1];
    const sum2 = arguments[2] + arguments[3];
    return sum1 / sum2;
  }
}
console.log(funkyMath(5, 7, 3, 6));

const currentArray = [5, 20, 17, 23, 6, 48];
const oddArray = [];

for (let i = 0; i < currentArray.length; i++) {
  if (currentArray[i] % 2 !== 0) {
    oddArray.push(currentArray[i]);
  }
}

oddArray.sort((a, b) => a - b);
console.log(oddArray);

const me = {
  firstName: "Cial",
  lastName: "Hendricks",
  age: 20,
  favouriteColour: "Purple",
  dreamCar: "Honda S2k 2007"
};

me.favouriteFood = "Pizza";
delete me.age;
console.log(me);