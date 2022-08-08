// Problem 01
/*
Harry’s mom gave him tk 1000 and asked him to buy some oranges and
apples. Write a program to help Harry calculate how much money the
shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
apples is tk 700.
*/
const money = 1000;
const totalCost = 700;

const shopkeeperReturn = money - totalCost;

console.log(shopkeeperReturn);

// Problem 02
/*
Write a program to calculate the average marks of Mathematics,
Biology, Chemistry, Physics, and Bangla of a student.
 */
const mathMarks = 78;
const biologyMarks = 55;
const chemistryMarks = 64;
const physicsMarks = 70;
const banglaMarks = 60;

const totalMarks =
  mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);

const averageMarks = totalMarks / 5;

console.log(averageMarks);

// Problem 03
/*
John’s teacher gave him two variables. Each variable contains a string.
John’s teacher asked him to combine these two strings(‘I am going to
be’ and ‘an awesome web developer’) and print them in one line. Help
John write the program.
*/

const str1 = "I am going to be";
const str2 = "an awesome web developer";

const combineStrings = str1 + " " + str2;

console.log(combineStrings);

// Problem 04
/*
 Sarah’s mother is teaching her mathematics. She gave Sarah the number
119 and asked her what the remainder would be if she divided the number
by 5. Help Sarah write the program.
 */

const number = 119;
const remainder = number % 5;

console.log(remainder);

// Problem 05
/*
 নিচের ভেরিয়ে বল ডিক্লেয়ার এ ক োনটার মধ্যে কি কি সমস্যা আছে । দেখত ো বের করতে
পার ো কিনা?
Var price = 33
var name - Shabana
var boxName = ‘Cocola;
var 88_price = 34;
var enum = -1;
var _$box’78 = ‘Monika’;
var home-address = “kochu khet”;
*/

// Var price = 33
// variable diclaration  Var should be lowercase var

// var name - Shabana
// there should be = instead of -

// var boxName = ‘Cocola;
// closing quotation missing 'Cocola'

// var 88_price = 34;
// variable name can't start with number

// var enum = -1;
// enum is reserved keyword for JavaScript. We can't use reserved keyword for variable name

// var _$box’78 = ‘Monika’;
// variable name can't contains special characters other than _ and $

// var home-address = “kochu khet”;
// variable name can't contains special characters other than _ and $

// Problem 06
/*
You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/
const fruits = ["Apple", "Banana", "Orange"];

const indexOfBanana = fruits.indexOf("Banana");
console.log(indexOfBanana);

// a. replacing Banana with Mango
fruits[1] = "Mango";
console.log(fruits);

// b. removing ‘Orange’ and adding ‘Watermelon’.
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);

// Problem 07
/*
You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using
if-else.
*/

const totalScore = 60;

if (totalScore >= 80) {
  console.log("A grade");
} else if (totalScore >= 60) {
  console.log("B grade");
} else if (totalScore >= 50) {
  console.log("C grade");
} else if (totalScore >= 40) {
  console.log("D grade");
} else {
  console.log("F grade");
}

// Problem 08
/*
You are given three numbers 13, 79, and 45. Write a program that will
print the largest number using if-else.
*/

const num1 = 13;
const num2 = 79;
const num3 = 45;

if (num1 > num2 && num1 > num3) {
  console.log(`The largest number is ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`The largest number is ${num2}`);
} else {
  console.log(`The largest number is ${num3}`);
}

// Problem 09
/*
You are given a triangle with the sides 9, 8, 9. Write a program to check
whether a triangle is Isosceles or not using if-else.
 */

const side1 = 9;
const side2 = 8;
const side3 = 9;

if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("The triangle is Isosceles");
} else {
  console.log(" Triangle is not Isosceles");
}

// Problem 10
/*
ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। ত োমার বন্ধু আলিয়া, ডালিয়া,
সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জান োনা। তবে তাদের নম্বর
জান ো. আলিয়া 95 পেয়েছে , ডালিয়া 66 পেয়েছে , সালিয়া 80 পেয়েছে , মালিয়া পেয়েছে 59,
লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে
দি তে পারবে ?
১) যারা ৫০ এর নিচে পেয়েছে , তাদের grade F.
২) যারা ৫০ বা তার উপরে পেয়েছে , অথবা ৬০ এর নিচে পেয়েছে , তাদের grade D.
৩) যারা ৬০ বা তার উপরে পেয়েছে , অথবা ৭০ এর নিচে পেয়েছে , তাদের grade C.
৪) যারা ৭০ বা তার উপরে পেয়েছে , অথবা ৮০ এর নিচে পেয়েছে , তাদের grade B.
৫) যারা ৮০ বা তার উপরে পেয়েছে , অথবা ৯০ এর নিচে পেয়েছে , তাদের grade A.
৬) যারা ৯০ বা তার উপরে পেয়েছে , তাদের grade A+.
*/

const marks = 66;

if (marks < 50) {
  console.log("grade F");
} else if (marks >= 50 && marks < 60) {
  console.log("grade D");
} else if (marks >= 60 && marks < 70) {
  console.log("grade C");
} else if (marks >= 70 && marks < 80) {
  console.log("grade B");
} else if (marks >= 80 && marks < 90) {
  console.log("grade A");
} else {
  console.log("grade A+");
}
