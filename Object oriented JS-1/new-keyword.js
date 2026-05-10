function TataCar(chassisNumber, modelName){
    this.chassisNumber = chassisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
}


TataCar.prototype.status = function() {
    return `Tata ${this.modelName} car with #${this.chassisNumber} | Fuel: ${this.fuelLevel}`;
}

const car1 = new TataCar("MH-101", 'Nexon');
const car2 = new TataCar("MH-102", 'Harrier');


console.log(car1.status());
console.log(car2.status());



//This is not same as above
function createAutoRikshaw(id, route){
    return{
        id,
        route,
        run() {
            return `Auto ${this.id} runs on ${this.route} route`;
        },
    }
}

const auto1 = createAutoRikshaw('UP-1', 'Lucknow-Kanpur');
const auto2 = createAutoRikshaw('UP-2', 'Agra-Mathura');

console.log(auto1);
console.log(auto2);

console.log(auto1.run());
console.log(auto2.run());