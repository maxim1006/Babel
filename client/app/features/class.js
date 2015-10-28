/*
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name + " привет");
    }
}

let user = new User("Max");

user.sayHi();*/



/*
class User {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }

    set fullName(newName) {
        let nameUppercased = newName.toUpperCase();
        [this.name, this.surname] = nameUppercased.split(" ");
    }

    static createUser(name, surname) {
        return new User(name, surname);
    }

};

//let user = new User("Максим", "Максимов");
//
//console.log(user.fullName);
//user.fullName = "Алия Максимова";
//console.log(user.fullName);

let newUser = User.createUser("Max", "Maximov");
console.log(newUser.fullName); //Max Maximov*/



class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class PortalUser extends User {
    getName() {
        return "portal user: " + super.getName();
    }
}

let portalUser = new PortalUser("Max");
console.log(portalUser.getName());
