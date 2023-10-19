// let text = "I love_cats. Cats_are very_easy to_love. Cats are very popular";
// text = text.replaceAll(/_/g, "-");
// console.log(text);

//2 ci tapsiriq
// const kicikHarfeCevir = (metin) => {
//     if (typeof metin !== 'string') {
//         return 'Zehmet olmasa bir metin daxil edin.';
//     }
//     return metin.toLowerCase();
// };
// let orijinalMetin = "asd sajdhj hasdjhj asfd as";
// let kicikHarfliMetin = kicikHarfeCevir(orijinalMetin);
// console.log(kicikHarfliMetin);

//3 ci tapsiriq
// const aga = (metin) => {
//     if (typeof metin !== 'string') {
//         return 'Zehmet olmasa bir metin daxil edin.';
//     }
//     metin = metin.trim();
//     let elementinsirasi = metin.split('');
//     return elementinsirasi;
// }
// let orjinalmetin = "   sbfhb jadfhjh jahjfh   ";
// let elementinsirasi = aga(orjinalmetin);
// console.log(elementinsirasi);

//4 ci tapsiriq input("Robin Singh from USA ") outputda(robin-singh from-usa) stringini vermelidir
// const aga = (metin) => {
//     if (typeof metin !== 'string') {
//         return 'Zehmet olmasa bir metin daxil edin.';
//     }
//     let kicikherflimetin = metin.toLowerCase();
//     let hazirolunmusmetin = kicikherflimetin.replaceAll(" ", '-');
//     return hazirolunmusmetin;
// }
// let orginalmetni = "Robin Singh from USA";
// let hazirolunmusmetin = aga(orginalmetni);
// console.log(hazirolunmusmetin);

// 5 ci tapsiriq
// input olaraq(js string exercises) output(Js string exercises)

// function firsthherfdeyis(str) {
//     if (str.length == 0) {
//         return str;
//     }
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// let inputString = "js string exercises";
// let outputString = firsthherfdeyis(inputString);
// console.log(outputString);

// 6 ci tapsiriq
// Daxil edilmis stringdeki boyuk herflerin sayini return eden program
// function boyukHerfinSayi(string) {
//     let boyukHerfSayi = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()) {
//             boyukHerfSayi++;
//         }
//     }
//     return boyukHerfSayi;
// }
// let metn = "Bu STRING-deki BoYuK HeRF sayini tapmaq lazimdir tapin gelsin.";
// let say = boyukHerfinSayi(metn);
// console.log(`Stringdə ${say} böyük hərf var.`);

// Human constructor
function Human(name, surname, birthYear, birthCity) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.birthCity = birthCity;

    this.getFullName = function () {
        return this.name + " " + this.surname;
    }
}

// Human obyektləri yaratmaq
var person1 = new Human("John", "Doe", 1990, "New York");
var person2 = new Human("Alice", "Johnson", 1985, "Los Angeles");
var person3 = new Human("Bob", "Smith", 1995, "Chicago");
var person4 = new Human("Emma", "Brown", 1980, "San Francisco");
var person5 = new Human("David", "Wilson", 1992, "Houston");

// Human obyektlərini people array-inə əlavə etmək
var people = [person1, person2, person3, person4, person5];

// searchHuman funksiyası
function searchHuman(searchString, dataArray) {
    var results = [];
    searchString = searchString.toLowerCase(); // Arama string-ini kiçik hərflərə çeviririk

    for (var i = 0; i < dataArray.length; i++) {
        var fullName = dataArray[i].getFullName().toLowerCase(); // İnsanın tam adını kiçik hərflərlə alırıq
        if (fullName.includes(searchString)) {
            results.push(dataArray[i]);
        }
    }

    return results;
}

// searchByFullName funksiyası
function searchByFullName(searchString, dataArray) {
    var results = [];
    searchString = searchString.toLowerCase(); // Arama string-ini kiçik hərflərə çeviririk

    for (var i = 0; i < dataArray.length; i++) {
        var fullName = dataArray[i].getFullName().toLowerCase(); // İnsanın tam adını kiçik hərflərlə alırıq
        if (fullName === searchString) {
            results.push(dataArray[i]);
        }
    }

    return results;
}

// Search string-i prompt-dan almaq
var searchStr = prompt("Axtarmaq istədiyiniz tam adı daxil edin:");

// Axtarış funksiyasını çağırdıq
var searchResults = searchHuman(searchStr, people);

// Axtarış nəticələrini göstərmək
if (searchResults.length > 0) {
    console.log("Axtarış nəticələri:");
    for (var i = 0; i < searchResults.length; i++) {
        console.log(searchResults[i].getFullName() + ", " + searchResults[i].birthYear + ", " + searchResults[i].birthCity);
    }
} else {
    console.log("Heç bir uyğun nəticə tapılmadı.");
}
