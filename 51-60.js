// * Problem 51
/*
একটা ক োড লিখ ো। যেটা দিয়ে ক োন একটা array এর মধ্যে সবচেয়ে ছ োট
সংখ্যা বের করে দিতে পারবে ।
 */
function smallestNumInArray(arr) {
  let smallestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}
console.log(smallestNumInArray([1, 2, 3, 0, -3]));

// * Problem 52
/*
একটা ক োড লিখ ো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছ োট সংখ্যা বের
করে দিবে ।
 */

function smallNumber(num1, num2, num3) {
  return Math.min(num1, num2, num3);
}

console.log(smallNumber(1, 2, -5));

// * Problem 53
/*
একটা ফাংশন লিখ ো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে ।
সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে । ত োমার কাজ হবে ইনপুট নেয়া
array এর মধ্যে যতগুলা সংখ্যা আছে । সেই সংখ্যা গুলার গড় বের করবে ।
তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে । একটু চিন্তা কর ো। বুঝার
চেষ্টা কর ো। ট্রাই কর ো। দেখ ো পার ো কিনা
 */

function avgfrmArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log(avgfrmArray([3, 36, 0]));

// * Problem 54
/*
একটা ফাংশন লিখ ো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের
দৈর্ঘ্য আর উচ্চতাকে নিবে । তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে
রেজাল্ট হিসেবে রিটার্ন করবে ।
 */

function area(width, height) {
  return width * height;
}

console.log(area(5, 4));

// * Problem 55
/*
ট্রিকি ) ক োন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে । সেই সংখ্যাগুল ো
থেকে second largest সংখ্যা বের করার একটা প্র োগ্রাম লিখ ো। দরকার হলে
গুগলে সার্চ দাও। তারপর সার্চ রে জাল্ট দেখে বুঝে বুঝে করার চে ষ্টা কর ো।
 */

// Finding Largest Number from an array
function largestNumber(arr) {
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}
// Creating unique number array
function uniqueNumberArray(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

function secondLargestNumber(arr) {
  // Creating unique number array from input array
  const unique = uniqueNumberArray(arr);

  const largestNum = largestNumber(unique);
  // finding index of largest number
  const indexOfLargestNum = unique.indexOf(largestNum);

  // removing largest number
  unique.splice(indexOfLargestNum, 1);

  //finding second largest number
  const secondLargestNumber = largestNumber(unique);
  return secondLargestNumber;
}

console.log(secondLargestNumber([2, 5, 6, 6, 7, 7, 8, 8]));

// * Problem 56
/*
একটা ফাংশন লিখ ো। সেটার মধ্যে তিনটা প্যারামি টার নিবে । এই তিনটা
প্যারামি টার হবে ক োন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন ত োমার কাজ
হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের
করা। ক োন একটা ত্রি ভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কি ভাবে
আয়তন বের করতে হয় সে ই ফর্মুলা গুগল থেকে খুঁজে বের কর ো।
 */

function areaOfTriangle(a, b, c) {
  // calulating semi-perimeter
  let s = (a + b + c) / 2;

  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}

console.log(areaOfTriangle(8, 11, 13));

// * Problem 57
/*
ক োন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কি না। সেটা চেক করার একটা
ফাংশন লিখ ো।
 */
function isPrimeNumber(n) {
  for (let i = 2; i < n; i++) {
    // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
    if (n % i === 0) return false;
    // when parameter is divisible by i, it's not a prime number so return false
  }
  return n > 1;
  // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
}

console.log(isPrimeNumber(11));

// * Problem 58
/*
দুইটা ভেরিয়েবল এর মধ্যে য োগ, বিয় োগ, গুণ, ভাগ কি ভাবে করতে হয় সেটা কি জান ো।
অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জান ো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখ ো তারপর তাদের য োগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখ ো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয় োগ, গুন, ভাগ এবং ভাগশেষ বের কর ো।
 */

const a = 16;
const b = 6;

const addition = a + b;
const substraction = a - b;
const mutification = a * b;
const division = a / b;
const remender = a % b;

console.log(addition, substraction, mutification, division, remender);

// * Problem 59
/*
তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পার ো। কম্পারিজন করতে পার ো। যে দুইটা
ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছ োট, বড়, অসমান, সমান , ছ োট বা সমান, বড় বা সমান। এইগুলা চেক করতে পার ো। অর্থাৎ <, >, ==, !=, <=, >= চি হ্নগুলা ব্যবহার করতে
পার ো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে
ক োড লিখে ফেল ো।
 */

const c = 14;
const d = 9;

if (c < d) {
  console.log("c is less then d");
}
if (c > d) {
  console.log("c is grater then d");
}
if (c === d) {
  console.log("c is equal to d");
}
if (c !== d) {
  console.log("c is not equal d");
}
if (c <= d) {
  console.log("c is less then or equal to d");
}
if (c >= d) {
  console.log("c is grater then or equal to d");
}

// * Problem 60
/*
ত োমার যদি দুইটা শর্ত পূরণ করতে বলে । এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে । তাহলে তুমি কি সেটা চেক করতে পারবে ? একইভাবে যদি বলে তুমি দুইটা শর্তের যে ক োন একটা পূরণ করতে পারবে । অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পার ো কিনা। যদি পার ো তাহলে
নিজে নিজে এই রকমে র ক োড লিখে ফেল ো।
 */

const e = 5;
const f = 6;
const g = 5;
const h = 4;

if (e === g && e > h) {
  console.log("e is equal g and e is grater then h");
}
if (e > f || e > h) {
  console.log("e is grater then  f or e is  grater then h");
}
