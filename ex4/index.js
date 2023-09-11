

function addNumbers(a = 0,b = 0,c = 0){
    return a+b+c;
}


function addNumbers(a = 0, ...rest){
    var sum = a;
    rest.forEach(el => {sum += el});
    return sum;
}


class Dog{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }

    bark(){
        console.log("Ham ham");
    }

    sayName(){
        console.log(`I am ${this.name}`)
    }

    static get id(){
        return "1234-1234"
    }
}


class GermanShepperd extends Dog{
    constructor(owner, name){
        super(name, "Shepperd")
        this.owner = owner;
    }
}

// MIXIN



const myDog = new Dog("Azorel", "Yorkshire");
const myShepperd = new GermanShepperd("Gigel", "Max");