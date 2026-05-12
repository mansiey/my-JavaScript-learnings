//Examples:
//1.

function startCompany(){
    function chef(name){
        return `Name of your company is ${name}`;
    }
    return chef;
}

const getMyCompany = startCompany();
console.log(getMyCompany('FoodLoverss!!'));


//2.
function eternal(guest){
    const guestName = guest;
    let count = 0;

    function zomato() {
        if(count === 1) return;
        console.log(`Hi ${guestName}, from zomato!`);
        count++;
    }

    function blinkit() {
        console.log(`Hi ${guestName}, from blinkit!`);
    }

    // zomato();
    // blinkit();
    return{
        zomato,
        blinkit,
    }
}

const mansi = eternal('Mansi');
const suraj = eternal('Suraj');

mansi.zomato();
mansi.zomato();
mansi.blinkit(); 