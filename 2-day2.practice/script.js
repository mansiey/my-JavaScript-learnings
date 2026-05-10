// *** DAY-2 ***  => FUNCTIONS

// function Hello(){
//     console.log('Bye!');
// }

// Hello();

// function greeting(x){
//     console.log("hello,", x);
// }

// greeting("Mansi");


// 1. Creating a function this way.

// function cartoon(){
//     function cartoonInCartoon(){
//         return "Attack on Titan";
//     }

//     return cartoonInCartoon;
//     // return cartoonInCartoon();   => if you do this, you're basically calling the which function, i.e you return a string. Hence, anime can't be invoked as a function.
// }

// const anime = cartoon();
// console.log(anime);

// const res = anime();
// console.log(res);


/*
2. Another way of creating the function:

we create a variable, and assign a function to that variable, then we can call that variable as a function
*/


// let cartoon = function () {
//     console.log("Anime!!!");
// }

// cartoon();

/*
3. One more way of creating a function.  (Arrow function)

we will use previous way of writing the function. in that way we have verboseness in the function, removing that creates an arrow function.
*/

// let age = 24;
// const isAllowed = function (age) {
//     return age >= 18;
// }
// console.log(isAllowed(age));


// //            |            this is arrow function.
// //            |
// //            V

// const isAllowedAgain = (age) => {
//     return age >= 18;
// }
// console.log(isAllowed(age));


// const isAllowedd = (age) => age >= 18;
// console.log(isAllowed(age));

// let isHappy = (money, age) => money >= 1000000 && age >= 25;
// console.log(isHappy(2000000, 25));


// function meraPyaraFun(num1){
//     return console.log(2+3+num1);
// }

// meraPyaraFun(5);


// HIGH - ORDER FUNCTION

// function meraFun(udhaarKaFun){
//     return udhaarKaFun() + 40;
// } 

// function cartoon(){
//     return 20;
// }

// function Anime(){
//     return 100;
// }

// let x = meraFun(cartoon);
// console.log(`The value of cartoon is ${x}!`);

// let y = meraFun(Anime);
// console.log(`The value of THE Anime is ${y}!!!`);



//ARRAY & ARRAY METHODS
// const numArr = [1, 2, 3, 4, 5];
// console.log(numArr);


// // numArr.push(6);
// // console.log(numArr);

// // numArr.shift();
// // console.log(numArr);

// // console.log(numArr.shift());
// // console.log(numArr);

// // numArr.unshift(0);
// // console.log(numArr);

// // console.log(numArr.length);
// // console.log(numArr);


// // console.log(numArr.includes(1));

// // function printAll(ele){
// //     console.log(ele);
// // }

// // numArr.forEach(printAll);

// // console.log("  ");

// numArr.forEach((ele) => console.log(ele));                 // in terms of Arrow function


// //how forEach works internally
// forEach((ele) => console.log(ele));     

// function forEach(paraFun){
//     for(let i = 0; i < numArr.length; i++){
//         paraFun(numArr[i]);
//     }
// }

// // .map() operator

// const result = numArr.map((ele) => ele*2);
// console.log(result);

//internally

// const nums = [1, 3, 5, 7, 9, 11, 13, 15];
// console.log(nums);
// const result = map((ele) => ele * 3);
// console.log(result);

// function map(fn) {
//     const result = [];

//     for (let i = 0; i < nums.length; i++) {
//         const currEle = nums[i];
//         const num = fn(currEle);

//         result.push(num);
//     }
//     return result;
// }

const nums = [3, 10, 24, 90];

const result = nums.map(e => e * 10 + 1);
console.log(result);



