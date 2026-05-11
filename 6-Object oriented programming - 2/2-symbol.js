const aadhar_of_Mansi = Symbol("aadhar");
const aadhar_of_Suraj = Symbol("aadhar");

console.log(typeof aadhar_of_Mansi);
console.log(aadhar_of_Mansi.description);

console.log(aadhar_of_Mansi === aadhar_of_Suraj);
console.log(aadhar_of_Mansi.toString());
console.log(aadhar_of_Mansi.description);


const nonIndian = Symbol();
console.log(nonIndian.description);

const biometricHash = Symbol('BiometricHash');
const bloodGroup = Symbol('BloodGroup');

const citizenRecord = {
    name: 'Mansi',
    age: 24,
    [biometricHash] : 'MAN46SI',
    [bloodGroup]: 'B+'
}

//if Symbols are passed as keys, it's not visible while priniting
console.log(Object.keys(citizenRecord));

//This one is used to list the Symbol keys in object
console.log(Object.getOwnPropertySymbols(citizenRecord));


//Trying to make objects iterable
const rtiqueryBook = {
    queries: ['Infra budget', 'Ration card', 'Education budget', 'Startup laws'],

    [Symbol.iterator](){
        let index = 0
        const queries = this.queries
        return{
            next(){
                if(index < queries.length){
                    return {value: queries[index++], done: false};
                }

                return {value: undefined, done: true};
            }
        }
    }
}


for(const query of rtiqueryBook){
    console.log(`filing RTI: ${query}`);
}


const governmentScheme = {
    name: 'PM kisan yojana',
    people: 54,
    [Symbol.toPrimitive](hint){
        if(hint === 'string'){
            return this.name;
        }
        if(hint === 'number'){
            return 404;
        }
    }
}

console.log(+governmentScheme);
console.log(`${governmentScheme}`);