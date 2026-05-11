function prepareOrderCB(dish, cb){
    setTimeout(() => cb(null, {dish, status: 'prepared'}), 100)
}

function pickupOrderCB(order, cb){
    setTimeout(() => cb(null, {...order, status: 'picked-up'}), 100)
}

function deliveredOrderCB(order, cb){
    setTimeout(() => cb(null, {...order, status: 'delivered'}), 100)
}

prepareOrderCB('Biryani', (err, order) => {
    if(err) return console.log(err);
    pickupOrderCB(order, (err, order) => {
        if(err) return console.log(err);
        deliveredOrderCB(order, (err, order) => {
            if(err) return console.log(err);
            console.log(`${order.dish} : ${order.status}`);
        });
    });
});




// function prepareOrder(dish) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!dish) {
//                 reject(new Error('No dish!'));
//                 return;
//             }
//             console.log(`${dish} is ready!`);
//             resolve({ dish, status: 'prepared' });
//         }, 100);
//     })
// }


// function pickupOrder(order) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`${order} is ready!`);
//             resolve({ ...dish, status: 'prepared' });
//         }, 100);
//     })
// }


// function deliverOrder(order) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`${order} is ready!`);
//             resolve({ ...dish, status: 'prepared' });
//         }, 100);
//     })
// }

// prepareOrder('Paneer Tikka')
//     .then(order => pickupOrder(order))
//     .then(order => deliverOrder(order))
//     .catch();