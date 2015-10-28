/*
function f(arg1 = "Первый аргумент", arg2 = 2, arg3 = true) {
    console.log(`${arg1}, ${arg2}, ${arg3}`);
}

f(); //Первый аргумент, 2, true*/


/*
function f(arg, ...rest) {
    console.log(arg);
    console.log(rest);
}

f("Первый аргумент", "второй", "третий");*/


/*
let options = {
    x: 10,
    y: 100,
    z: 1000
};

function f({x,y,z}) {
    console.log(x);
    console.log(y);
    console.log(z);
}

f(options); //10 100 1000
*/


/*
function f() {
    console.log(f.name); //f
}

let g = () => console.log(g.name); //g

f();
g();
*/


/*if (true) {

    sayHi(); // работает

    function sayHi() {
        console.log("Привет!");
    }

}
sayHi(); // ошибка, функции не существует*/


/*let arr = [5, 8, 3];

let sorted = arr.sort( (a,b) => a - b );

console.log(sorted); // 3, 5, 8*/


/*
function defer(f, ms = 2000) {
    return () => {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

defer(()=>console.log("Привет через 2 секунды"))();*/
