const numbers = [1, 2, 3, 4, 5];

console.log("Printing numbers:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("Counting down:");
let counter = 5;
while (counter >= 1) {
  console.log(counter);
  counter--;
}

console.log("Even numbers:");
for (const num of numbers) {
  if (num % 2 ===0) {
    console.log(num);
  }
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Total sum:", sum);