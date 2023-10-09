# Questions_And_Answers

1. Write the correct answer from the following options and give an explanation (2-5 lines).
   <br/>
   `let greeting;
   greeting = {};
   console.log(greeting);`
   <br/>
   A: {}
   <br/>
   B: ReferenceError: greeting is not defined
   <br/>
   C: undefined

Answer : A <br/>
Explanation :
"We start with an empty object assigned to 'greeting', and when we log 'greeting', we see an empty object as the output."

---

2. Write the correct answer from the following options and give an explanation (2-5 lines).
<br/>
   `function sum(a, b) {
   return a + b;
   }
   sum(1, "2");`
   <br/>
   A: NaN
   <br/>
   B: TypeError
   <br/>
   C: "12"
   <br/>
   D: 3 
   
Answer : C <br/>
Explanation : We have a 'sum' function that takes a number and a string as arguments. Inside the function, it calculates the sum of the number and the string, and because we can't directly add a number and a string, the function converts the result into a string before returning it as the output.

---
<br>
3. Write the correct answer from the following options and give an explanation (2-5 lines).
 <br>
 const food = ["🍕", "🍫", "🥑", "🍔"];
  <br>
const info = { favoriteFood: food[0] };
 <br>
info.favoriteFood = "🍝";
 <br>
console.log(food);
<br>
A: ['🍕', '🍫', '🥑', '🍔']
<br>
B: ['🍝', '🍫', '🥑', '🍔']
<br>
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
<br>
D: ReferenceError

Answer : A <br/>
Explanation : We start by creating an array called 'food' and an object with a 'favoriteFood' property. We set the object's 'favoriteFood' property to the first item in the 'food' array. Later, when we change the value of 'info.favoriteFood', it doesn't affect the 'food' array. We're modifying the 'info' object, not the 'food' array, so the array remains unchanged when we log it.

--- 

4. Write the correct answer from the following options and give an explanation (2-5 lines).
   <br>
   `function sayHi(name) {
  return Hi there, ${name};
}
console.log(sayHi());`
<br/>
   A: Hi there,
   <br>
   B: Hi there, undefined
   <br>
   C: Hi there, null
   <br>
   D: ReferenceError

Answer : B <br/>
Explanation : Here we are calling the sayHi() without providing any argument, and also the 'name' variable inside the function doesn't have a value assigned to it. So, when we call sayHi() without an argument, the function returns "Hi there, undefined"

---

5. Write the correct answer from the following options and give an explanation (2-5 lines).
<br>
   `let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach((num) => {
if (num) count += 1;
});
console.log(count);`
<br/>
<br>
A: 1
<br>
B: 2
<br>
C: 3
<br>
D: 4

Answer : C <br/>
Explanation : In this code, there's an array nums containing the values [0, 1, 2, 3]. The forEach method is used to iterate through each item in the array. Inside the callback function, it checks if the current item num is truthy. When num is truthy, the condition is true, and a count is incremented by 1. After iterating through all the items in the array, the count variable holds the number of truthy values, which is 3 in this case.

---
