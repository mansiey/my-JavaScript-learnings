function cookDish(ingredient, style) {
    return `${this.name} prepares ${ingredient} in ${style} style!`;
}

const sharmaKitchen = {name: "Sharmaji's Kitchen"};
const guptaKitchen = {name: "Guptaji's Kitchen"};

console.log(cookDish.call(sharmaKitchen, "Paneer & Masale", "Mugali"));
console.log(cookDish.call(guptaKitchen, "Paneer & Masale", "Mugali"));


const sharmaOrder = ["Chhole-Chawal", "Panjabi-Dhaba"];
console.log(cookDish.apply(sharmaKitchen, sharmaOrder));

const sharmaReport = cookDish.bind(sharmaKitchen, "Paneer & chhole", "gujarati");
console.log(sharmaReport());

// console.log(cookDish.bind(guptaKitchen, "Paneer & Masale", "Mugali"));  --> this returns a function
const guptaReport = cookDish.bind(guptaKitchen, "Paneer & Roti", "spicy");
console.log(guptaReport());


function reportDelivery(location, status) {
    return `${this.name} at ${location}: ${status}`;
}

const deliveryBoy = {name: "Ranveer"};
console.log("call:", reportDelivery.call(deliveryBoy, "Dahisar", "Arrived"));
console.log("apply:", reportDelivery.apply(deliveryBoy, ["Dadar", "Arrived"]));
console.log("bind:", reportDelivery.bind(deliveryBoy, "Borivali", "ordered"));

const bindReport = reportDelivery.bind(deliveryBoy, "Borivali", "ordered");
console.log(bindReport());