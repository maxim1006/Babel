/*
let a = 1;
let b = 2;

function return3() {
    return 3
}

var obj = {
    [a+b + return3()]: 6
};

console.log(obj);*/


/*
var obj = {
    can: "yes"
};

let obj2 = {
    doIt: "aha"
};

let obj3 = {
    can: "ohh, yes"
};

Object.assign(obj, obj2, obj3);

console.log(obj);*/


/*
let obj = {
    name: "Max",
    say() {
        console.log(this.name);
    }
};

let obj1 = {
    __proto__: obj,
    log() {
        console.log(super.say());
        console.log(this.say());
    }
};

//console.log(obj.say()); //Max
console.log(obj1.log()); //Max*/


console.log(Object.is(NaN, NaN)); //true
