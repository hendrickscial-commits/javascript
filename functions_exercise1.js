function multiply(num1, num2, num3) {
  return num1 * num2 * num3;
}
let result = multiply(10, 5, 21)
console.log("Multiplyed Value:");

console.log(result);


const convertToSeconds = function(minutes, seconds) {
  return (minutes * 60);
};
console.log("Seconds:");

console.log(convertToSeconds(15, 60));

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
}
let celsius = fahrenheitToCelsius(90);
console.log("Celsius:");

console.log(celsius);

function reverseString(str) {
  return str.split(''). reverse().join('');
}
let string= reverseString("haibo");
console.log("Reversed String:");

console.log(string);

let vowels = "AaEeIiOoUu"
let count = 0

function countVowels(str){
  for (let d = 0; d < str.length; d++) {
  if (vowels.includes(str[d])) {
    count++;
  }
}
return count;
}

console.log("Vowels counted:")
console.log(countVowels("Panarottis"))

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

console.log("Prime Results:");
console.log(isPrime(12));
console.log(isPrime(7));
console.log(isPrime(21));
console.log(isPrime(6));