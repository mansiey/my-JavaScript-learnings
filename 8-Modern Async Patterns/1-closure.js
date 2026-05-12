//Examples:
//1.

function startCompany() {
    function chef(name) {
        return `Name of your company is ${name}`;
    }
    return chef;
}

const getMyCompany = startCompany();
console.log(getMyCompany('FoodLoverss!!'));


//2.
function eternal(guest) {
    const guestName = guest;
    let count = 0;

    function zomato() {
        if (count === 1) return;
        console.log(`Hi ${guestName}, from zomato!`);
        count++;
    }

    function blinkit() {
        console.log(`Hi ${guestName}, from blinkit!`);
    }

    // zomato();
    // blinkit();
    return {
        zomato,
        blinkit,
    }
}

const mansi = eternal('Mansi');
const suraj = eternal('Suraj');

mansi.zomato();
mansi.zomato();
mansi.blinkit();



//PIYUSH SIR'S NOTES

function add(a, b) {
    return (a + b);
}

console.log(add(3, 4));       //this is not optimized for large no. of function calls


//Writing a function that optimizes any calculating function:

function createOptimizedVersion(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;

        return result;
    }
}

const optimizedAdd = createOptimizedVersion(add);
console.log(optimizedAdd(4,5));


console.time('start');
add(3,4)
console.timeEnd('start');
console.time('start');
add(3,4)
console.timeEnd('start');
console.time('start');
add(3,4)
console.timeEnd('start');


console.time('start');
(optimizedAdd(4,5));
console.timeEnd('start');
console.time('start');
(optimizedAdd(4,5));
console.timeEnd('start');
console.time('start');
(optimizedAdd(4,5));
console.timeEnd('start');
console.time('start');
(optimizedAdd(4,5));
console.timeEnd('start');

