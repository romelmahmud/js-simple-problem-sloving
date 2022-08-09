//* Problem 11
/*
তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দে খলে , ট্রাফিক
সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে । 
যদি হলুদ রং হয় তাহলে ত োমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন
হয় তাহলে ত োমার রাস্তা পার হওয়া উচিত। তাই একটা ক োড লিখে ফেল ো। যেখানে আমরা
signal নামে একটা ভেরিয়েবল থাকবে । সেটার মান green, yellow বা red হতে পারে ।
সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে । ত ো, সেই ক োড ফটাফট লিখে ফেল ো।
 */
const signal = "green";

if (signal === "red") {
  console.log("Don't cross the road ");
} else if (signal === "yellow") {
  console.log("Wait");
} else if (signal === "green") {
  console.log("You can cross the road");
}

//* Problem 12
/*
প্রতিদিন ত োমার কাজ কি ?
১) রাত ৮ টা বাজে মডিউল আনলক কর ো
২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস কর ো
৩) ভিডিও দেখতে দেখতে ন োটস নাও
৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস কর ো
৫) ক োন কিছু বুঝতে না পারলে (চিন্তা করে দেখ ো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে
জয়েন কর ো
এখন ত োমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরর জিনিস গুলা আউটপুট হিসেবে
দেখান ো।
 */
const tasks = [
  "watch module at 8pm",
  "practicing while watching module video",
  "take note while watching video",
  "after finish watching, practice whole module again",
  "if don't understand some topics go to support session",
];

// for (let i = 1; i <= 10; i++) {
//   console.log("loop:", i);
//   for (let j = 0; j <= tasks.length - 1; j++) {
//     console.log(tasks[j]);
//   }
// }

//* Problem 13
/*
আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখান ো।
 */
// let i = 1;
// while (i <= 10) {
//   console.log("loop:", i);
//   let j = 0;
//   while (j <= tasks.length - 1) {
//     console.log(tasks[j]);
//     j++;
//   }
//   i++;
// }

//* Problem 14
/*
উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে )করে দেখাও
 */
let k = 10;
while (k >= 1) {
  console.log("loop:", k);
  let l = tasks.length - 1;
  while (l >= 0) {
    console.log(tasks[l]);
    l--;
  }
  k--;
}

//* Problem 15
/*
উপরের প্রব্লেমটাই for লুপ রিভার্স ওয়েতে (decremental হিসেবে )করে দেখাও
 */

for (let k = 10; k >= 1; k--) {
  console.log("loop:", k);
  for (let l = tasks.length - 1; l >= 0; l--) {
    console.log(tasks[l]);
  }
}

//* Problem 16
/*
ত োমার কাছে : ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে , ৬০ টাকার বেশি হলে gaming ল্যাপটপ
কি নবে , ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান
ল্যাপটপ কিনবে । না হয় তুমি ম োবাইল দিয়ে কাজ চালাবে ।
 */

//* Problem 17
/*
আসকে আমার মন ভাল ো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
 */

//* Problem 18
/*
while লুপ কি ভাবে কাজ করে
 */

//* Problem 19
/*
একটা ক োড লিখে ৫৮ থে কে ৯৮ পর্যন্ত যত সংখ্যা আছে সে গুলাকে দে খাও
 */

//* Problem 20
/*
একটা ক োড লিখে ৪১২ থে কে ৪৫৬ পর্যন্ত যত জ োর সংখ্যা আছে সে গুলাকে
দে খাও
 */
