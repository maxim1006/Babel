/*
let promise = new Promise(function(resolve, reject) {
    let a = 3;

    a > 2 ? resolve("resolve " + a) : reject("reject " + a);
});

promise.then(
    result => {
        console.log(result);
    },
    err => {
        console.log(err);
    }
);*/


/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Ошибка о_О!"));
    }, 1001);

    setTimeout(() => {
        resolve("Все ок");
    }, 1000);
});

promise
    .then(
        (result) => {
            console.log(result);
            return result;
        }
    )
    .then(
        result => {
            console.log("2ой раз" + result);
            return "2ой раз " + result;
        }
    )
    .then(
        result => {
            //throw new Error("Ошибко");
            return fetch("json.json")
                   .then((response) => {return response.json()});
        }
    )
    .then(
        (result) => console.log(result.name)
    )
    .catch(
        (error) => { console.log(error) }
    );
*/

/*Promise.all([
        fetch("json.json").then(
            response => response.json()
        ),
        fetch("json1.json").then(
            response => response.json()
        )
    ])
    .then(results => {
        console.log(results.map(
            (val) => {
                console.log(val.name);
                return val.name;
            }
        ));
    });*/


Promise.race([ //только первый resolve
        fetch("json.json").then(
                response => response.json()
        ),
        fetch("json1.json").then(
                response => response.json()
        )
    ])
    .then(results => {
        console.log(results);
    });
