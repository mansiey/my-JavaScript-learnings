/* 
// const promise1 = new Promise();
// console.log(promise1);      //will throw error because it wants callback

const promise2 = new Promise((resolve, reject) => {
    resolve('Mansi');
});

console.log(promise2);
//This will print the result but promises are mainly used to handle the result that can take some time
// we use setTimeOut for that


const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Mansi!');
        // reject(new Error('Will check another time!'));
    }, 2000)
}, 2000)

console.log(promise3);
//this will print pending since the printing is happening before the code execution


//we will have to again use setTimeOut() for the printing with delay > delay of the code execution\
// setTimeout(() => {
//     console.log(promise3);
// }, 3000);


//But how many times would we use setTimeOut() then?
//promise handles this on it's own using some methods

// promise3.then(                       //Here data is the value we got in promise3 by resolve
//     (data) => console.log(data),
//     (error) => console.log(error)
// );




// //ANOTHER WAY OF PRINTING THE RESULT
// // 1). works same as above   --> Here, the reference of the data is being passed using then

// promise3.then(console.log);


// //2). We will store the callback function in a variable

// const myCB = (data) => {                         //Here data is the value we got in promise3 by resolve
//     console.log(data);
// };

// promise3.then(myCB);



// //another way of writing data and error together

// promise3
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));






//you can pass the success data and the error ahead

promise3
    .then((data) => data.toUpperCase())
    .then(console.log);


*/


// const turant = Promise.resolve('Turant');
// console.log(turant);


// const allPromise = Promise.all([
//     Promise.resolve('Mansi'),
//     Promise.resolve('Code'),
//     Promise.resolve('Chai')
// ]);

// allPromise.then(console.log);

// const allPromise2 = Promise.allSettled([
//     Promise.resolve('Mansi'),
//     Promise.resolve('Code'),
//     Promise.resolve('Chai')
// ]);
// allPromise2.then(console.log);


// const hPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         // res("Mansi!");
//         rej(new Error("Why is it happneing??!!"));
//     }, 3000);
// });


// //async - await is used to handle the delay in promise 
// async function nice() {
//     const result = await hPromise;
//     console.log(result);
// }
// nice();


//OR

// const newResult = await hPromise;
// console.log(newResult);



//async-await can't handle error, we use try-catch for that

// async function nice2() {
//     try{
//         const result = await hPromise;
//         console.log(result);
//     } catch(error) {
//         console.log('Error aa gaya hai: ', error.message);
//     }
// }

// nice2();



// console.log("Mansi");
// Promise.resolve("Mansi is fine").then((v) => {
//     console.log("Microtask:", v);
// })
// console.log('Singh');




// Another example for practice
//1.

// function boilWater(ms){
//     return new Promise((res, rej) => {
//         console.log('Karte hai Boil!')
//         if(typeof ms !== "number" || ms < 0){
//             rej(new Error("Time Exist hi nahi karta!"));
//         }

//         setTimeout(() => {
//             res('Boiling!')
//         }, ms);
//     });
// }


// boilWater(200)
//     .then((msg) => console.log('Resolved:', msg))
//     .catch((err) => console.log('Rejected:', err.message));



// //we can use this also
// async function boils(){
//     const result = await boilWater(200);
//     console.log(result);
// }

// boils();


//2.
function grindLeaves() {
    return Promise.resolve('Leaves grounded!');
}

function steepTea(time) {
    return new Promise((res) => {
        setTimeout(() => {
            res('Steeped Tea');
        }, time);
    });
}

function addSugar(spoons) {
    return `Added ${spoons} sugar`;
}

grindLeaves()
    .then(console.log)
    .then(val => {
        return steepTea(200);
    })
    .then(console.log);