const hero = {
    name: "Mansi the Master",
    class: "S-Rank",
    level: 10,
    mana: 160,
    isAlive: true,
    age: undefined
};

hero.weapon = "Fire";
console.log(hero);

delete hero.level;
console.log(hero);

console.log("name" in hero);
console.log("age" in hero);
console.log("toString" in hero);

//using keys() method to get keys of the object --> array
const keys = Object.keys(hero);
console.log(keys);

//using keys() method to get keys of the object  --> array
const values = Object.values(hero);
console.log(values);

//using entries() method to get keys-value pair of the object  --> array of array
const entries = Object.entries(hero);
console.log(entries);


for (const [key, value] of Object.entries(hero)) {
    console.log(`${key}: ${value}`);
}

for (const value in Object.values(hero)) {
    console.log(value);
}

for (const value of Object.values(hero)) {
    console.log(value);
}


//creating an object from Array
const priceList = [
    ["Pasta", 200],
    ["Biryani", 300],
    ["Pav Bhaji", 250]
];

const newPriceList = Object.fromEntries(priceList);
console.log(newPriceList);

// Object.freeze(newPriceList);
// delete newPriceList.pasta;
// console.log(newPriceList);

newPriceList.maggiie = 50;
console.log(newPriceList);

Object.seal(newPriceList);
console.log(newPriceList);

// newPriceList.Chhole = 75;   
// console.log(newPriceList);   //doesn't work

newPriceList.maggiie = 55;     //works
console.log(newPriceList);


const book = {
    name: "Forty Rules of Love",
}

Object.defineProperty(book, "Author", {
    value: "Elif Shafaq",
    writable: false,
    enumerable: true,
    configurable: false
})

console.log(book);


// book.Author = "R.F kuang";
// console.log(book);

for(const value of Object.values(book)){
    console.log(value);
}

for(const [key, value] of Object.entries(book)){
    console.log(`${key}: ${value}`);
}

// delete book.Author;
// console.log(book);

const nameDescp = Object.getOwnPropertyDescriptor(book, "name");
console.log(nameDescp);



