// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log("Hello, pleasure to meet you")
}
printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function printAge(age){
  console.log(`You are ${age} years old.`)
}
printAge(27);
// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function printPayRange(company,lowerRange,upperRange) {
  if (typeof company !== "string") {
    console.log("Please enter a string for company")
  } else if (typeof lowerRange !== "number") {
    console.log("Please enter a number for lowerRange")
  } else if (typeof upperRange !== "number") {
    console.log("Please enter a number for upperRange")
  } else {
    payRange = upperRange - lowerRange
    console.log(`${company} has a pay range of ${payRange}`);
  }
}
printPayRange("google",90000,110000);
// 4: Write a function that satifies the following interaction pattern:
function checkStock (quantity,item) {
  if (typeof quantity !== "number" || typeof item !== "string") {
    console.log("Please make sure quantity is a number and item is a string");
  } else if (quantity < 0) {
    console.log(`Please only enter quantities that are not negative`);
  } else if (quantity === 0) {
    console.log(`${item} - OUT of stock!`);
  } else if (quantity < 4) {
    console.log(`${item} - is running LOW`);
  } else if (quantity >= 4) {
    console.log(`${item} is stocked`);
  }
}
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
