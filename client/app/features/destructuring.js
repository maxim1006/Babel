//с массивом
//let [first, last] = ["Max", "Aliya"];
//
//console.log(first);
//console.log(last);


//let [,,max] = "I am Max".split(" ");
//console.log(max);


/*
let [max, ...rest] = "Максим, мое имя".split(" ");
console.log(max);
console.log(rest);*/


/*let [max] = [];
console.log(max);*/


/*
let [name=getName()] = [];

function getName(name = "Дефолтное имя Максим") {
    return name;
}

console.log(name);*/




//с объектом
let options = {
    x: "10px",
    y: "100px",
    z: "1000px"
};

let {x: a, y, z} = options;
console.log(a);
//console.log(x); - будет ошибка, так как присвоил переменную к a, не к x
console.log(y);
console.log(z);
