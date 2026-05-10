class Cricketer{
    constructor(name, role){
        this.name = name;
        this.role = role;
        this.stamina = 100;
        this.matchesPlayed = 0;
    }

    indtroduce(){
        return `${this.name} the ${this.role} | MatchesPlayed: ${this.matchesPlayed} | Stamina: ${this.stamina}`;
    }
}

const player1 = new Cricketer('Virat', 'Batsman');
const player2 = new Cricketer('Bumrah', 'Bowler');

console.log(player1);
console.log(player2);

console.log(player1.hasOwnProperty('name'));


class Debutant{
    constructor(name){
        this.name = name;
        this.run = function(){
            return `${this.name} is running faster than before!`;
        }
        this.walkOut = () => `${this.name} walks out to bat for the first time!`;
    }
}

const debutant1 = new Debutant('Shubman');
console.log(debutant1);

//If we detach arrow function, it would still have the object original context
const detachedDebutant = debutant1.walkOut;
console.log(detachedDebutant());


//If we detach normal function, it would lose the object original context
// const detachedRun = debutant1.run;
// console.log(detachedRun());


const debutant2 = new Debutant('Mansi');
console.log(debutant1.walkOut === debutant2.walkOut)
//false because walkOut() is a arrow function