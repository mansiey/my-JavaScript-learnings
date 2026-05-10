// console.log(this);


// function ranveerOnDifferentstage(){
//     return typeof this;
// }
// console.log(ranveerOnDifferentstage());



// function ranveerWithNoScript(){
//     "use strict"
//     return this;
// }
// console.log(ranveerWithNoScript());


//     ** HOW THIS KEYWORD WORKS**

const bollywoodMovie = {
    name: "Bajirao Mastani",
    lead: "Ranveer singh",
    introduce(){
        return `The actor ${this.lead} performs in ${this.name}`;
    }
}

console.log(bollywoodMovie);
console.log(bollywoodMovie.introduce());



const filmDirector = {
    name: "Sanjay Leela Bhansali",
    cast: ["Ranveer", "Deepika", "Priyanka"],
    announceCast(){
        this.cast.forEach((actor) => {
            console.log(`${this.name} introduces ${actor}`)
        });
    }
}

filmDirector.announceCast();



const filmSet = {
    crew: "Spot Boys",
    prepareProps(){
        console.log(`Outer this.crew: ${this.crew}`);

        // function arrangeChairs(){
        //     console.log(`Inner this.crew: ${this.crew}`);
        // }
        // arrangeChairs();      --> nested function doesn't inherit this keyword

        const arrangeLights = () => {
            console.log(`arrow this.crew: ${this.crew}`);
        }
        arrangeLights();
    },
}
filmSet.prepareProps();


const actor = {
    name: "Ranveer",
    bow() {
        return `${this.name} takes the bow`;
    }
}

// console.log(actor.bow());
// const detachedbow = actor.bow;
// console.log(detachedbow());




const myfun1 = function() {
    console.log(this);
}
myfun1();


const myfun2 = () => {
    console.log(this);
}
myfun2();