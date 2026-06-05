function validateUserInput(name, age) {
  try {
    if (!name || typeof name !== "string") {
      throw new Error("Name must be valid string.");
    }
    if (typeof age !== "number" || age < 0) {
      throw new Error("Age must be a positive number.");
    }
    console.log(`User Validated: ${name}, Age: ${age}`);
  } catch (error) {
    console.error("Validation Error:", error.message);
  }
}

function demonstrateErrors(value) {
  try {
    if (value === undefined) throw new ReferenceError("Value is not defined");
    if (value === null) throw new TypeErrorCustom("Value cannot be null");
    if (typeof value !== "number") throw new TypeErrorCustom("Value must be a number");
    if (value < 0) throw new RangeErrorCustom("Value cannot be negative");
    if (!Number.isInteger(value)) throw new ValidationError("Value must be an integer");
    
    console.log(`Value is valid: ${value}`);
    return value * 2;
    
  } catch (error) {
    console.error(`Error caught: ${error.name} - ${error.message}`);
    return null;
  }
}

const stringHelpers = {
  capitalize(str) {
    try {
      if (typeof str !== "string") throw new TypeErrorCustom("Input must be a string");
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    } catch (error) {
      console.error(`capitalize error: ${error.message}`);
      return "";
    }
  },
  
  reverseString(str) {
    try {
      if (typeof str !== "string") throw new TypeErrorCustom("Input must be a string");
      return str.split("").reverse().join("");
    } catch (error) {
      console.error(`reverseString error: ${error.message}`);
      return "";
    }
  },
  
  countWords(str) {
    try {
      if (typeof str !== "string") throw new TypeErrorCustom("Input must be a string");
      return str.trim().split(/\s+/).filter(word => word.length > 0).length;
    } catch (error) {
      console.error(`countWords error: ${error.message}`);
      return 0;
    }
  },
  
  truncate(str, maxLength = 10) {
    try {
      if (typeof str !== "string") throw new TypeErrorCustom("Input must be a string");
      if (typeof maxLength !== "number") throw new TypeErrorCustom("maxLength must be a number");
      return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    } catch (error) {
      console.error(`truncate error: ${error.message}`);
      return "";
    }
  }
};

const arrayHelpers = {
  sum(arr) {
    try {
      if (!Array.isArray(arr)) throw new TypeErrorCustom("Input must be an array");
      if (arr.some(item => typeof item !== "number")) throw new ValidationError("Array must contain only numbers");
      return arr.reduce((acc, num) => acc + num, 0);
    } catch (error) {
      console.error(`sum error: ${error.message}`);
      return 0;
    }
  },
  
  average(arr) {
    try {
      if (!Array.isArray(arr)) throw new TypeErrorCustom("Input must be an array");
      if (arr.length === 0) throw new RangeErrorCustom("Array cannot be empty");
      return arrayHelpers.sum(arr) / arr.length;
    } catch (error) {
      console.error(`average error: ${error.message}`);
      return 0;
    }
  },
  
  removeDuplicates(arr) {
    try {
      if (!Array.isArray(arr)) throw new TypeErrorCustom("Input must be an array");
      return [...new Set(arr)];
    } catch (error) {
      console.error(`removeDuplicates error: ${error.message}`);
      return [];
    }
  },
  
  findMax(arr) {
    try {
      if (!Array.isArray(arr)) throw new TypeErrorCustom("Input must be an array");
      if (arr.length === 0) throw new RangeErrorCustom("Array cannot be empty");
      if (arr.some(item => typeof item !== "number")) throw new ValidationError("Array must contain only numbers");
      return Math.max(...arr);
    } catch (error) {
      console.error(`findMax error: ${error.message}`);
      return null;
    }
  }
};

validateUserInput("Cial", 20);
validateUserInput("Cial", -20);
validateUserInput("", 23);
validateUserInput("Jared", 54);
validateUserInput("Jared", -3);

demonstrateErrors(10);
demonstrateErrors(-5);
demonstrateErrors("text");
demonstrateErrors(null);
demonstrateErrors(3.14);

console.log("Capitalize:", stringHelpers.capitalize("hello world"));
console.log("Reverse:", stringHelpers.reverseString("JavaScript"));
console.log("Word Count:", stringHelpers.countWords("This is a test string"));
console.log("Truncate:", stringHelpers.truncate("This is a very long string", 15));
console.log("Invalid string test:", stringHelpers.capitalize(123));

console.log("Sum:", arrayHelpers.sum([1, 2, 3, 4, 5]));
console.log("Average:", arrayHelpers.average([10, 20, 30, 40]));
console.log("Remove Duplicates:", arrayHelpers.removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log("Find Max:", arrayHelpers.findMax([7, 2, 9, 1, 5]));
console.log("Invalid array test:", arrayHelpers.sum("not an array"));