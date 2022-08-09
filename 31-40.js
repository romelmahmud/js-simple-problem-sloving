// * Problem 31
/*
একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে
দেখাবে ।
 */
function multiplication13() {
  for (let i = 1; i <= 10; i++) {
    console.log(`13 * ${i} = ${13 * i}`);
  }
}
multiplication13();

// * Problem 32
/*
একটা ফাংশন লিখবা যেটা যে ক োন নামকে uppercase বারে গুলারকে ইস হিসেবে নিবে আর
আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে ।
 */
function upperTolowercase(str) {
  return str.toLowerCase();
}

console.log(upperTolowercase("Romel"));

// * Problem 33
/*
fullName নামে একটা ফাংশন তৈরী কর যেটা ত োমার নামের প্রথম অংশ এবং ত োমার
নামের শেষের অংশ প্যারামি টার হিসেবে নিবে । আর ত োমার নামে  দুই অংশ জ োড়া দিয়ে আউটপুট হিসেবে ত োমার পূর্ন নাম রিটার্ন করে দিবে । যেমন ধর ো, hablu এবং kanto ইনপুট প্যারামি টার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে ।
 */
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName("Romel", "Mahmud"));

// * Problem 34
/*
একটা ফাংশন লিখবা যেটাকে তুমি ক োন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার
square করে সে ই square কে রিটার্ন করবে ।
অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সে টাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে ।
 */
function square(number) {
  return number * number;
}
console.log(square(10));

// * Problem 35
/*
Write a function that will take hour as the input parameter and will convert it
into minutes and will return the result in minutes.
 */
function hourToMinutes(hour) {
  return hour * 60;
}

console.log(hourToMinutes(3));

// * Problem 36
/*
Write a function findLeapYear() that will take the array [2023, 2024, 2025,
2028, 2030] as the input parameter and will check if each year is a leap year. If
a year is a leap year insert that year in a new array, return the new array and
print the result.
 */

function findLeapYear(yearArr) {
  let leapYear = [];
  for (let i = 0; i < yearArr.length; i++) {
    if (
      yearArr[i] % 400 === 0 ||
      (yearArr[i] % 4 === 0 && yearArr[i] % 100 !== 0)
    ) {
      leapYear.push(yearArr[i]);
    }
  }
  return leapYear;
}

const year = [2023, 2024, 2025, 2028, 2030];

console.log(findLeapYear(year));

// * Problem 37
/*
Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ]
as the input parameter and will return the sum of the odd numbers.
 */
function findOddSum(numArr) {
  let sumOfOddNumbers = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 !== 0) {
      sumOfOddNumbers += numArr[i];
    }
  }
  return sumOfOddNumbers;
}

const numbersArray = [5, 7, 8, 10, 45, 30];

console.log(findOddSum(numbersArray));

// * Problem 38
/*
leapYear() নামে ফাংশন লিখ ো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা
চেক কর ো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে ।
 */
function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }
  return false;
}

console.log(leapYear(2023));

// * Problem 39
/*
ত োমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে । সেই
ফাংশনকে ক োন সংখ্যা প্যারামি টার হিসেবে দিলে , সেই সংখ্যা Even হলে ফাংশন true রিটার্ন
করবে আর Odd হলে false রিটার্ন করবে ।
 */
function ageOddOrEven(age) {
  if (age % 2 === 0) {
    return true;
  }
  return false;
}

console.log(ageOddOrEven(35));

// * Problem 40
/*
এমন একটা ফ্যাংশনা লিখ ো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামি টার হিসেবে দিবে । আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে ।
 */
function hourToMinutes2(hour) {
  return hour * 60;
}

console.log(hourToMinutes(5));
