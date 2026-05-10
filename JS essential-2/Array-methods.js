const orders = [
    {dish: "Pasta", price: 150, spicy: false, qty: 2},
    {dish: "Pav Bhaji", price: 190, spicy: true, qty: 3},
    {dish: "Tava Pulav", price: 350, spicy: false, qty: 1},
    {dish: "Idali", price: 50, spicy: true, qty: 1}
]

const myData = orders.forEach((order, ind) => {
    console.log(`#${ind + 1}: ${order.qty}X ${order.dish}`);
});

console.log(myData);
console.log(typeof myData);

const receipt = orders.map(o => `${o.dish}: $${o.price * o.qty}` ) ;
console.log(receipt);

const result = orders.filter(order => order.price <= 150);
console.log(result);
// console.log(result.length);
console.log(typeof result);
console.log(Array.isArray(result));



const totalRevenue = orders.reduce((sum, order) => {
    sum += order.qty * order.price;
    return sum;  
}, 0)

console.log(totalRevenue);
console.log(typeof totalRevenue);

const group = orders.reduce((acc, order) => {
    const category = order.spicy ? "spicy" : "mild";

    acc[category].push(order.dish);
    return acc; 
}, {spicy: [], mild: []});

console.log(group);

const numbers = [100, 35, 54, 78, 3, 5];
const sortedNumbers = [...numbers].sort((a,b) => a-b);   //ascending
console.log(sortedNumbers);