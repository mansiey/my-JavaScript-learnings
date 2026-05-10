const carriage1 = ["Mansi", "Vipul", "Suraj"];
const carriage2 = [];

//METHODS FOR MANIPULATION

const threeEmptySeats = Array(3);
console.log(threeEmptySeats);
console.log(threeEmptySeats.length);

const passanger = Array("Mansi", "Physics", "Masters");
const singlePassanger = Array.of(3);   
console.log(singlePassanger);
console.log(singlePassanger.length);


const testArr = Array.of("Mansi", 24, "Books", "Anime");
console.log(testArr);

const arrFromString = Array.from("MANSI");
console.log(arrFromString);
console.log(arrFromString.length);

arrFromString.length = 4;    //assigning less length than the original loses the elements
console.log(arrFromString);

arrFromString.length = 5;  
console.log(arrFromString);    

const arr1 = [1, 2, 3, 4, 5];
arr1.splice();   //doesn't do anything
console.log(arr1);

arr1.splice(2);   //starts at 0-index, removes 2 el
console.log(arr1);

const arr1removed1 = arr1.splice(1, 3);    //starts at 1-index, removes 3 el
console.log(arr1);
console.log(arr1removed1);

const arr1removedd = arr1.splice(1, 3, 6, 7);     //starts at 1- ind, removes 3 and adds 6, 7 at that place
console.log(arr1);
console.log(arr1removedd);

const extra = "Mansi";
const arr1add = arr1.splice(1, 3, extra);    //
console.log(arr1);

const arr1Copy = arr1.slice();
console.log(arr1Copy); 


// METHODS FOR SEARCHING  => indexof, includes





