"use strict";

let co = require('co');

/*let generator = (function* generatorSequence() {
    yield 1;
    yield 2;
    return 3;
})();

//console.log(generatorSequence()); //объект генератор

let one = generator.next();

console.log(one); //{value: 1, done: false}

let two = generator.next();

console.log(two);//{value: 2, done: false}

let three = generator.next();

console.log(three);//{value: 3, done: true}

for (let value of generator) {
    console.log(value); //пробегается по генератору
}*/



/*
function* generator() {
    yield 1;

    yield* generatorInner();

    yield 3;
}

function* generatorInner() {
    yield 2;
}

for (let value of generator()) {
    console.log(value); //1,2,3
}
*/



/*function* gen() {
    let log = yield "переданный аргумент";
    console.log(log + ' в логе');
}

let generator = gen();

console.log(generator.next().value); //переданный аргумент

generator.next(2); //2 в логе*/



/*function* gen() {
    try {
        let log = yield "переданный аргумент";
        console.log(log + ' в логе');
    } catch (e) {
        console.log(e.message);
    }
}

let generator = gen();

console.log(generator.next().value); //переданный аргумент

generator.throw(new Error("Ошибочко")); //2 в логе*/




/*function* gen() {
    let sum = 0;

    console.log(sum);

    yield 1;

    let b = 2;
    console.log(2);

    yield 3;

    for (let i = 0; i < 10; i++) {
        sum += i;
    }
    console.log(sum);
}

let generator = gen();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());*/

//Вывод: пока не дошли до первого yield, делается все до него, затем следующий и т.д.
//0
//generators.js:80 Object {value: 1, done: false}
//generators.js:68 2
//generators.js:81 Object {value: 3, done: false}
//generators.js:75 45
//generators.js:82 Object {value: undefined, done: true}



/*function* getJson() {
    let jsonFetch = yield fetch('./json.json');
    let jsonResult = yield jsonFetch.json();
    console.log(jsonResult);

    let timeout = yield new Promise(
        (resolve) => {
            setTimeout(() => resolve('То что пришло из сеттаймаут'), 3000)
        }
    );

    console.log(timeout);

    let timeout1 = yield new Promise(
        (resolve) => {
            setTimeout(resolve, 3000, 'То что пришло из сеттаймаут 1')
        }
    );

    console.log(timeout1);
}

function execute(generator, yieldValue) {

    let next = generator.next(yieldValue);

    if (!next.done) {
        next.value.then(//вот в этой строчке дожидаемся, когда предыдущий прамис выполниться и начинаем новый
                result => execute(generator, result),
                err => generator.throw(err)
        );
    } else {
        // обработаем результат return из генератора
        // обычно здесь вызов callback или что-то в этом духе
        console.log("Все асинхронные запросы выполнены");
    }

}

execute( getJson() );*/



/*co(function* () {
    let jsonFetch = yield fetch('./json.json');
    let jsonResult = yield jsonFetch.json();

    console.log(jsonResult);

    let timeout = yield new Promise(
        (resolve) => {
            setTimeout(() => resolve('То что пришло из сеттаймаут'), 3000)
        }
    );

    console.log(timeout);

    let timeout1 = yield new Promise(
        (resolve) => {
            setTimeout(resolve, 3000, 'То что пришло из сеттаймаут 1')
        }
    );

    console.log(timeout1);
});*/


//пример с co и вложенным генератором
co(function* () {
    let sum = yield* getSum();
    console.log(sum);
});

function* getSum() {
    let sum = yield new Promise((resolve) => {
        setTimeout(() => resolve('сумма 2000'), 1000);
    });

    return sum;
}



