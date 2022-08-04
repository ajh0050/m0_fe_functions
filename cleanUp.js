// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askName() {
  console.log("Hello, what is your name?")
}

askName()
//change the name of the function


// EX 2:
function addThreeNums(first, second, third) {
sum = first + second + third
console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//didn't to define sum as a variable.

// EX 3:
func makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
//closing curly bracket could be moved down a line



//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
var avg = sum / 2;

  console.log(`the average is: ${avg}.`)
  }
average(3,9)

//put the first curly bracket for the function on the first line. Call the function at the end.
//put the period inside the interpolation backticks. put both sum and avg equations at the same indentation. 
