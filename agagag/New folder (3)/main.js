class Human {
    constructor(name, surname, birthYear, birthPlace) {
        this.name = name;
        this.surname = surname;
        this._birthYear = birthYear;
        this.birthPlace = birthPlace;
    }

    getFullName() {
        return this.surname;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this._birthYear;
    }
    login() {


    }
}

class Child extends Human {
    constructor(name, surname, birthYear, birthPlace) {
        super(name, surname, birthYear, birthPlace);

    }

    getBirthYear() {
        return new Date(this._birthYear).getFullYear();
    }
}
class User extends Human {
    #password = 1123124;
    constructor(username, email, password) {
        super(username, email, password);
        this.#password = this.#password;
    }
}
const user = new User("jokai", "@gmail.com", 12345);
const child = new Child('ferman', 'xankisiyev', new Date(2004, 6, 17), { city: 'neftchala', country: 'Azerbaijan' });

console.log('Full Name:', child.getFullName());
console.log('Age:', child.getAge());
console.log('Birth Year:', child.getBirthYear());
console.log(user);

class User2 {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password || this.getDefaultPassword();
        this.isLogged = false;
    }
    getDefaultPassword() {
        const city = this.getCityFromEmail();
        const birthYear = this.getBirthYearFromEmail();
        return city.slice(0, 2).toUpperCase() + birthYear;
    }
    getCityFromEmail() {
        return this.email.split('@')[1].split('.')[0];
    }
    getBirthYearFromEmail() {
        return "1990";
    }
    login(enteredUsername, enteredPassword) {
        if (enteredUsername === this.username && enteredPassword === this.password) {
            this.isLogged = true;
            console.log(`Welcome back ${this.username}`);
        } else {
            console.log("Invalid username or password. Please try again.");
        }
    }
}
const al = new User2("kullanici123", "kullanici@example.com", "pass123");
al.login("kullanici123", "pass123");
