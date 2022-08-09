// * Problem 41
/*
একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে
 */

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// * Problem 42
/*
৫০ থেকে ৮০ এর মধ্যে যত ো বিজ োড় সংখ্যা আছে সেগুলাকে দেখাবে ।
 */

for (let i = 50; i <= 80; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// * Problem 43
/*
তিনটা সংখ্যা এর য োগ করতে পারবে এমন একটা ফাংশন লিখ ো
 */
function threeNumberSum(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(threeNumberSum(3, 4, 5));

// * Problem 44
/*
ত োমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে । তুমি ক্যালকুলেশন করে তাপমাত্রা
ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে
 */

function celsiusToFahrenheit(temperature) {
  return temperature * 1.8 + 32;
}

console.log(celsiusToFahrenheit(20));

// * Problem 45
/*
একইভাবে উল্টা হিসাব করবে । যাতে ত োমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে
সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে ।
 */

function fahrenheitToCelsius(temperature) {
  return (temperature - 32) / 1.8;
}

console.log(fahrenheitToCelsius(90));

// * Problem 46
/*
কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা ত োমাকে বলে দিবে । তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য ক োন গ্রেড পাবে ।
 */
function calculateGrades(marks) {
  if (marks >= 90) {
    return "A+ Grade";
  } else if (marks >= 80) {
    return "A Grade";
  } else if (marks >= 70) {
    return "B Grade";
  } else if (marks >= 60) {
    return "C Grade";
  } else if (marks >= 50) {
    return "D Grade";
  } else {
    return "F Grade";
  }
}

console.log(calculateGrades(69));

// * Problem 47
/*
সুদের হিসাব করবে । জাস্ট হিসাব কে মনে করতে হয়। সেই চিন্তায় করবে । সুদ ভাল ো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কি ভাবে কোড এলি খতে হয় সেই এঙ্গেল থেকে করার চেষ্টা কর ো।
 */
// * Problem 48
/*
Suppose, you have an array with 8 elements. Find the smallest element of
that array.
Now for the previous array, try to find the second largest element.
*/

function smallestElement(arr) {
  let smallestElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
    }
  }
  return smallestElement;
}

console.log(smallestElement([1, 2, 3, 4, 5, -5, -7, 0, -10]));

// Now for the previous array, try to find the second largest element.

function largestNumber(arr) {
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

function secondLargestNumber(arr) {
  // Creating unique number array from input array
  const unique = [...new Set(arr)];
  const largestNum = largestNumber(unique);

  // finding index of largest number
  const indexOfLargestNum = unique.indexOf(largestNum);

  // removing largest number
  unique.splice(indexOfLargestNum, 1);

  //finding second largest number
  const secondLargestNumber = largestNumber(unique);
  return secondLargestNumber;
}

console.log(secondLargestNumber([2, 5, 6, 6]));

// * Problem 49
/*
Write a function and take an array as a parameter. Find the average of all
the elements of that array and return this average.
 */
function averageOfArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log(averageOfArray([2, 3, 4]));

// * Problem 50
/*
Write a function which takes the height and width of a rectangle as
parameters. Find out the area of that rectangle and print the result.
 */
function area(height, width) {
  return height * width;
}

console.log(area(30, 40));
