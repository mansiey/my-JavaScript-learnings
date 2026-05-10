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

console.log(Object.keys(citizenRecord));
console.log(Object.getOwnPropertySymbols(citizenRecord));