const prithviraj = {
    name: 'Prithviraj',
    generation: 'Grandfather',
    cookTraditionalDish() {
        return `${this.name} can cook an ancient family recipe!`;
    },
};

const raj = Object.create(prithviraj);
console.log(raj);
console.log(raj.name);

raj.name = 'Raj';
raj.generation = 'Father';
raj.runBuisness = function () {
    return `${ this.name } runs a family buisness!`;
};

console.log(raj);
console.log(raj.runBuisness());
console.log(raj.cookTraditionalDish());

const ranbir = Object.create(raj);

ranbir.name = 'Ranbir';
ranbir.generation = 'Son';
ranbir.makeFilm = function() {
    return `${this.name} directs blockbuster movies!`;
};

console.log(ranbir);
console.log(ranbir.makeFilm());
console.log(ranbir.runBuisness());
console.log(ranbir.cookTraditionalDish());

console.log(ranbir.hasOwnProperty('makeFilm'));
console.log(ranbir.hasOwnProperty('runBuisness'));
console.log(ranbir.hasOwnProperty('cookTraditionalDish'));



Array.prototype.last = function() {
    return this[this.length - 1];
};

console.log([1, 3, 7].last());

Array.prototype.mapTwo = function() {
    let ans = [];

    for(let i = 0; i < this.length; i++){
        ans.push(this[i] * 2);
    }

    return ans;
};

console.log([1, 2, 3].mapTwo());
