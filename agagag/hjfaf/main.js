class Canli {
    #genkod
    constructor(name, year, gozrengi,) {
        this.name = name;
        this.year = year;
        this.gozrengi = gozrengi;
        this.#genkod = this.#genkod
    }
    receiveDamage() {
        console.log("canli haqqinda melumat")

    }
}
const myCanli1 = new Canli("qurbanmellim", 1993, "qaramaviyasil");
console.log(myCanli1);
class Deri extends Canli {
    constructor(derirengi, novu) {
        super(year, gozrengi);
        this.derirengi = derirengi;
        this.novu = novu;
    }
    receiveDamage() {
        super.receiveDamage();
    }
}
console.log(Deri);
class body extends Canli {
    constructor(derirengi, beyin) {
        super(year, gozrengi);
        this.derirengi = derirengi;
        this.beyin = beyin;

    }
}
console.log(body);
class baspart extends Canli {
    constructor(derirengi, sacrengi) {
        super(year, gozrengi);
        this.derirengi = derirengi;
        this.sacrengi = sacrengi;

    }
}
console.log(baspart);
console.log(Deri.health)
