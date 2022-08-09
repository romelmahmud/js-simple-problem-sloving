// * Problem 21
/*
একটা ক োড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজ োড় সংখ্যা আছে সে গুলাকে দেখাও
*/
for (let i = 581; i <= 623; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
// * Problem 22
/*
তুমি এতদিন যাযা জিনি  শিখছ ো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা
for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।
*/
const learned = ["variable", "loop", "array", "object", "function"];

for (let i = 0; i < learned.length; i++) {
  console.log(learned[i]);
}
// * Problem 23
/*
তুমি এতদিন পর্যন্ত যে যে মডেলের ম োবাইল ফ োন ইউজ করছ ো সেগুলার নাম দিয়ে একটা
array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে
আউটপুট হিসেবে দেখাও
*/
const mobile = ["nokia", "sony-ericson", "sony", "samsung", "xaiomi"];
let i = 0;
while (i < mobile.length) {
  console.log(mobile[i]);
  i++;
}
// * Problem 24
/*
একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে । সেই
জিনিস ক োড করে দেখাও
*/
for (let i = 30; i <= 86; i++) {
  if (i === 44) {
    break;
  }
  console.log(i);
}
// * Problem 25
/*
ত োমার যত বই আছে সে গুলার দাম নিয়ে একটা array লিখে ফেল ো। যে বই গুল োর দাম ২০০
টাকার উপরে সে গুলাকে স্কিপ করবে । অর্থাৎ সে গুলাকে আউটপুট হিসেবে দেখাবে না। বাকি দেরকে আউটপুট হিসেবে দেখাবে । দেখ ো করতে পার ো কিনা।
*/
const booksPrice = [300, 350, 75, 80, 130, 500, 40, 780, 150, 160];
for (let i = 0; i < booksPrice.length; i++) {
  if (booksPrice[i] > 200) {
    continue;
  }
  console.log(booksPrice[i]);
}
// * Problem 26
/*
Write a function called foo() which prints “foo” and a function called bar()
which prints “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.
*/
function foo() {
  console.log("foo");
  bar();
}
function bar() {
  console.log("bar");
}
foo();

// * Problem 27
/*
Write a function called make_avg() which will take an three integers and
return the average of those values.
*/
function make_avg(intNum1, intNum2, intNum3) {
  return (intNum1 + intNum2 + intNum3) / 3;
}

const int1 = 70;
const int2 = 50;
const int3 = 60;

console.log(make_avg(int1, int2, int3));

// * Problem 28
/*
Challenging: Write a function called make_avg() which will take an array of
integers and the size of that array and return the average of those values.
*/
function make_avg2(intArr, arrSize) {
  let total = 0;
  for (let i = 0; i < intArr.length; i++) {
    total += intArr[i];
  }
  return total / arrSize;
}

const numArr = [15, 55, 65];

console.log(make_avg2(numArr, 3));

// * Problem 29
/*
Write a function called odd_even() which takes an integer value and tells
whether this value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter
*/
// has return + has parameter
function odd_even1(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(odd_even1(5));

// No return + has parameter

function odd_even2(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
odd_even2(8);

// * Problem 30
/*
You are in a hurry to go to your school on time. But when you are crossing
the road, the traffic signal is red coloured. In this situation, if you try to cross the
road, you may be in danger.If you notice a yellow coloured traffic signal, you
should stop. If you notice a green coloured traffic signal, you should cross the
road. So write a JS code, where there is a variable called signal. Its value can
be green, yellow or red & we will get different activities as output depending on
the variable. So, hurry up.
*/
const signal = "green";

if (signal === "red") {
  console.log("Don't cross the road ");
} else if (signal === "yellow") {
  console.log("Wait");
} else if (signal === "green") {
  console.log("You can cross the road");
}
