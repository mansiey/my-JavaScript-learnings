
console.log(brewPotion("Healing Herbs", 5));

//fubction declaration
function brewPotion(ingredient, dose) {
    return `Brewing potion with ${ingredient} (x${dose}... /nPotion Ready)`;
}

//function expression
const newPotion = function (ingredient) {
    return `Making Spices using ${ingredient}`;
}
console.log(newPotion('clove'));

//when obj is passed as a parameter, if fun changes the obj property -> that change will be visible globally
// const myCar = {
//     name: "Honda",
//     mode: "Accord",
//     year: "1998",
// };
// console.log(myCar);

// function myFun(obj){
//     obj.name = "Toyota";
// }

// myFun(myCar);
// console.log(myCar);





//HOW NORMAL FUNCTIONS HANDLE PARAMETERS DURING FUNCTION CALL EVEN IF NO ARGUMENTS WERE PASSED DURING FUNCTION DECLARATION

function oldStudents() {
    console.log("Type of arguments: ", typeof arguments)
    console.log(arguments);
    console.log("Is Array:", Array.isArray(arguments));
    const arrArgs = Array.from(arguments);
    console.log(arrArgs);
}

oldStudents("Mansi", "Ashtosh");


//SHOWS HOW ARROW FUNCTION DOES NOT HAVE ANY ARGS

// const arrowOldStudents = () => {
//     console.log("Type of arguments: ", typeof arguments)
//     console.log(arguments);
// }
// arrowOldStudents();


//HIGHER ORDER FUNCTION

let count = 0;
function readCount (){
    count++;
}

function newRead(readCount){
    readCount();
    console.log(count);
}
newRead(readCount);


//IIFE


// (function () {
//     console.log("Code Runs!");
// }) ();


const myReads = (function (){
    let countVal = 1;

    return {
        read () {
            countVal++;
            return `My read count is ${count}`;
        },
        count (){
            return count;
        }
    }
}) ();

console.log(myReads);
console.log(myReads.read());
console.log(myReads.countVal);



function makeFun() {
    const name = "Mansi";

    function displayName(){
        console.log(name);
    }

    return displayName;
}

makeFun();
const myFun = makeFun();
myFun();

