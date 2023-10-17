// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);


// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part);

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);

// let text1 = "Hello World!";
// let text2 = text1.toLowerCase();
// console.log(text2);


// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

//bosluqlar
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
//console.log(text2);

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded);

// let numb = 5;
// let text = numb.toString();
// console.log(text);

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char);

// let text = "5";
// let padded = text.padEnd(4, "0");
// console.log(padded);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// aga = fruits.toString();
// console.log(aga)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let x = fruits.pop();
// console.log(x);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let x = fruits.push("Kiwi");
// console.log(x)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.push("Kiwi");
// console.log(length);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let x = fruits.shift();
// console.log(x);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.shift();
// console.log(fruit);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let x = fruits.unshift("Lemon");
// console.log(x);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console(fruits[fruits.length] = "Kiwi");

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// let arr = ["istanbul" , "baku" , "agagah"];

// function search(arr) {
//     let word = prompt{"seheri daxil edin"};

// }
let arr = ["istanbul", "baku", "agagah"];
let axtarilan = prompt("fgasdgashdgh");

let index = arr.indexOf(axtarilan);

if (index !== -1) {
    let cixarilan = arr.splice(index, 1);
    console.log(`${axtarilan} cixarilan: ${arr}`);
} else {
    console.log(`${axtarilan} tapilmadiayye.`);
}


