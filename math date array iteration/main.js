// // const arr = [1, 2, 3];

// // const newArr = arr.filter(num => {
// //     if (num > 2) {
// //         return num;
// //     }

// //     return num;
// // });

// // console.log(newArr);


// let students = [
//   {
//     id: 1,
//     name: "asmar",
//     age: 19,
//     kesr: false,
//     hobbies: ["shopping", "restoran", "travel"],
//     password: {
//       email: "asmar@mail.com",
//       pass: "12345",
//       memmbers: {
//         qardas: "qardas",
//       },
//     },
//   },
//   {
//     id: 2,
//     name: "shanana",
//     age: 20,
//     kesr: true,
//     hobbies: ["kitab", "resm"],
//     password: {
//       email: "shana@mail.com",
//       pass: "123456",
//       memmbers: {
//         qardas: "qardas",
//       },
//     },
//   },
//   {
//     id: 3,
//     name: "nicat",
//     age: 21,
//     kesr: false,
//     password: {
//       email: "nicat@mail.com",
//       pass: "1234569",
//     },
//   },
//   {
//     id: 4,
//     name: "ayan",
//     age: 22,
//     kesr: true,
//     hobbies: ["mahni oxumaq", "mahni qulaq asmaq"],
//     password: {
//       email: "ayan@mail.com",
//       pass: "123456",
//       memmbers: {
//         qardas: "qardas",
//         baci: "baci",
//       },
//     },
//   },
// ];

// console.log(students);
// // console.log(students[1].password.email);
// // console.log(students[3].hobbies[1]);
// // console.log(students[2].kesr);
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//   //   console.log(students[i].name, students[i].age);
//   //   console.log(students[i].name, students[i].hobbies);
//   //   console.log(students[i].name, students[i].kesr);
//   //   console.log(students[i].name, students[i].password.memmbers?.qardas);
//   // yaslarin cemi
//   //   sum += students[i].age;
//   //   console.log(students[i].hobbies);
//   // hobbileri tek capa ver
//   //   for (let j = 0; j < students[i].hobbies?.length; j++) {
//   //     console.log(students[i].hobbies[j]);
//   //   }
//   // 20 den asagi
//   //   if (students[i].age < 20) {
//   //     console.log(students[i].name);
//   //   }
//   // pasvorddda 9 olan
//   //   if (students[i].password.pass.includes("9")) {
//   //     console.log(students[i].name);
//   //   }
// }
// // console.log(sum);
// // console.log(students[1]);
// // console.log(students[3]);

// // let obj = {
// //   id: 5,
// //   name: "aysun",
// //   age: 23,
// //   kesr: false,
// //   hobbies: ["netflix", "dostlarla vaxt kecirmek"],
// //   password: {
// //     email: "aysun@mail.com",
// //     pass: "123456",
// //   },
// // };
// // students.push(obj);
// // students.unshift(obj);
// // students.pop();
// // students.shift();
// // console.log(JSON.stringify(students));
// // console.log(JSON.parse(JSON.stringify(students)));
// // console.log(students.toString());
// // console.log(students/);
// // let arr = ["alma", "armud", "heyva", "nar", "mandalin", "ezgil"];
// // let arr2 = [1, 2, [2, 3], [1, 4]];

// // console.log(arr.join("-"));
// // delete arr[0];
// // let newArr = arr.concat(arr2);
// // console.log(arr.slice(1, 4));
// // console.log(arr.slice(-3));

// // let newArr = arr.splice(1, 3, "ananas", "mango");
// // console.log(arr);
// // console.log(arr2.flat());

// // console.log(newArr);
// // let a = "qurban";
// // a.sub;
// // let obj = {
// //   name: "qurban",
// //   age: 30,
// // };

// // let { name: ad, age: yas } = obj;

// // console.log(ad);
// // console.log(yas);

// // let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 120];
// // let arr2 = [3, 4, 6, 7, 8];

// // for (let i = 0; i < arr1.length; i++) {
// //   //   console.log("bu 1-ci arraydir", arr1[i]);

// //   for (let j = 0; j < arr2.length; j++) {
// //     // console.log("bu 2-ci arraydir", arr2[j]);
// //     if (arr1[i] == arr2[j]) {
// //       console.log(arr1[i]);
// //     }
// //   }
// // }

// // let obj = {};
// // let obj2 = new Object();

// // obj.name = "ali";
// // obj.age = 22;

// // console.log(obj);

// // students.forEach((element) => console.log(element));
// // students.forEach((element) => console.log(element.name));
// // students.forEach((element) => console.log(element.kesr));




// students.forEach((element) => {

//   // console.log(element.password.memmbers?.baci)
//   if (element.password.memmbers?.qardas) {
//     console.log(

//       element


//     )
//   }

// });

// students.forEach((element) => {

//   // console.log(element.password.memmbers?.baci)
//   if (element.age) {
//     console.log(

//       element


//     )
//   }

// });
// students.forEach((element, i) => )
// let totalAge = 0;

// for (let i = 0; i < students.length; i++) {
//   totalAge += students[i].age;
// }
const arr = [
  {
    "id": 4,
    "supplierId": 2,
    "categoryId": 3,
    "quantityPerUnit": "48 - 6 oz jars",
    "unitPrice": 22,
    "unitsInStock": 53,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Chef Anton's Cajun Seasoning",
    "supplier": {
      "id": 2,
      "companyName": "New Orleans Cajun Delights",
      "contactName": "Shelley Burke",
      "contactTitle": "Order Administrator",
      "address": {
        "street": "P.O. Box 78934",
        "city": "New Orleans",
        "region": "LA",
        "postalCode": 70117,
        "country": "USA",
        "phone": "(100) 555-4822"
      }
    },
    "category": {
      "id": 3,
      "description": "Desserts candies and sweet breads",
      "name": "Confections"
    }
  },
  {
    "id": 5,
    "supplierId": 2,
    "categoryId": 2,
    "quantityPerUnit": "36 boxes",
    "unitPrice": 21.35,
    "unitsInStock": 0,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Chef Anton's Gumbo Mix"
  },
  {
    "id": 6,
    "supplierId": 3,
    "categoryId": 2,
    "quantityPerUnit": "12 - 8 oz jars",
    "unitPrice": 25,
    "unitsInStock": 120,
    "unitsOnOrder": 0,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Grandma's Boysenberry Spread"
  },
  {
    "id": 7,
    "supplierId": 3,
    "categoryId": 7,
    "quantityPerUnit": "12 - 1 lb pkgs.",
    "unitPrice": 30,
    "unitsInStock": 15,
    "unitsOnOrder": 0,
    "reorderLevel": 10,
    "discontinued": false,
    "name": "Uncle Bob's Organic Dried Pears"
  },
  {
    "id": 8,
    "supplierId": 3,
    "categoryId": 2,
    "quantityPerUnit": "12 - 12 oz jars",
    "unitPrice": 40,
    "unitsInStock": 6,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Northwoods Cranberry Sauce"
  },
  {
    "id": 9,
    "supplierId": 4,
    "categoryId": 6,
    "quantityPerUnit": "18 - 500 g pkgs.",
    "unitPrice": 97,
    "unitsInStock": 29,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Mishi Kobe Niku"
  },
  {
    "id": 10,
    "supplierId": 4,
    "categoryId": 8,
    "quantityPerUnit": "12 - 200 ml jars",
    "unitPrice": 31,
    "unitsInStock": 31,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Ikura"
  },
  {
    "id": 2,
    "supplierId": 1,
    "categoryId": 1,
    "quantityPerUnit": "24 - 12 oz bottles",
    "unitPrice": 19,
    "unitsInStock": 17,
    "unitsOnOrder": 40,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Chang"
  },
  {
    "id": 3,
    "supplierId": 1,
    "categoryId": 2,
    "quantityPerUnit": "12 - 550 ml bottles",
    "unitPrice": 10,
    "unitsInStock": 13,
    "unitsOnOrder": 70,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Aniseed Syrup"
  },
  {
    "id": 11,
    "supplierId": 5,
    "categoryId": 2,
    "quantityPerUnit": "1 kg pkg.",
    "unitPrice": 21,
    "unitsInStock": 22,
    "unitsOnOrder": 30,
    "reorderLevel": 30,
    "discontinued": false,
    "name": "Queso Cabrales 2",
    "supplier": {
      "id": 5,
      "companyName": "Cooperativa de Quesos 'Las Cabras'",
      "contactName": "Antonio del Valle Saavedra",
      "contactTitle": "Export Administrator",
      "address": {
        "street": "Calle del Rosal 4",
        "city": "Oviedo",
        "region": "Asturias",
        "postalCode": 33007,
        "country": "Spain",
        "phone": "(98) 598 76 54"
      }
    },
    "category": {
      "id": 4,
      "description": "Cheeses",
      "name": "Dairy Products"
    }
  },
  {
    "id": 12,
    "supplierId": 5,
    "categoryId": 4,
    "quantityPerUnit": "10 - 500 g pkgs.",
    "unitPrice": 38,
    "unitsInStock": 86,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Queso Manchego La Pastora"
  },
  {
    "id": 13,
    "supplierId": 6,
    "categoryId": 8,
    "quantityPerUnit": "2 kg box",
    "unitPrice": 6,
    "unitsInStock": 24,
    "unitsOnOrder": 0,
    "reorderLevel": 5,
    "discontinued": false,
    "name": "Konbu"
  },
  {
    "id": 14,
    "supplierId": 6,
    "categoryId": 7,
    "quantityPerUnit": "40 - 100 g pkgs.",
    "unitPrice": 23.25,
    "unitsInStock": 35,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Tofu"
  },
  {
    "id": 15,
    "supplierId": 6,
    "categoryId": 2,
    "quantityPerUnit": "24 - 250 ml bottles",
    "unitPrice": 15.5,
    "unitsInStock": 39,
    "unitsOnOrder": 0,
    "reorderLevel": 5,
    "discontinued": false,
    "name": "Genen Shouyu"
  },
  {
    "id": 1,
    "supplierId": 1,
    "categoryId": 1,
    "quantityPerUnit": "10 boxes x 20 bags",
    "unitPrice": 18,
    "unitsInStock": 39,
    "unitsOnOrder": 0,
    "reorderLevel": 10,
    "discontinued": false,
    "name": "Chai"
  },
  {
    "id": 16,
    "supplierId": 7,
    "categoryId": 3,
    "quantityPerUnit": "32 - 500 g boxes",
    "unitPrice": 17.45,
    "unitsInStock": 29,
    "unitsOnOrder": 0,
    "reorderLevel": 10,
    "discontinued": false,
    "name": "Pavlova"
  },
  {
    "id": 17,
    "supplierId": 7,
    "categoryId": 6,
    "quantityPerUnit": "20 - 1 kg tins",
    "unitPrice": 39,
    "unitsInStock": 0,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Alice Mutton"
  },
  {
    "id": 18,
    "supplierId": 7,
    "categoryId": 8,
    "quantityPerUnit": "16 kg pkg.",
    "unitPrice": 62.5,
    "unitsInStock": 42,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Carnarvon Tigers"
  },
  {
    "id": 19,
    "supplierId": 8,
    "categoryId": 3,
    "quantityPerUnit": "10 boxes x 12 pieces",
    "unitPrice": 9.2,
    "unitsInStock": 25,
    "unitsOnOrder": 0,
    "reorderLevel": 5,
    "discontinued": false,
    "name": "Teatime Chocolate Biscuits"
  },
  {
    "id": 20,
    "supplierId": 8,
    "categoryId": 3,
    "quantityPerUnit": "30 gift boxes",
    "unitPrice": 81,
    "unitsInStock": 40,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Sir Rodney's Marmalade"
  },
  {
    "id": 24,
    "supplierId": 10,
    "categoryId": 1,
    "quantityPerUnit": "12 - 355 ml cans",
    "unitPrice": 4.5,
    "unitsInStock": 20,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Guaraná Fantástica"
  },
  {
    "id": 25,
    "supplierId": 11,
    "categoryId": 3,
    "quantityPerUnit": "20 - 450 g glasses",
    "unitPrice": 14,
    "unitsInStock": 76,
    "unitsOnOrder": 0,
    "reorderLevel": 30,
    "discontinued": false,
    "name": "NuNuCa Nuß-Nougat-Creme"
  },
  {
    "id": 26,
    "supplierId": 11,
    "categoryId": 3,
    "quantityPerUnit": "100 - 250 g bags",
    "unitPrice": 31.23,
    "unitsInStock": 15,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Gumbär Gummibärchen"
  },
  {
    "id": 27,
    "supplierId": 11,
    "categoryId": 3,
    "quantityPerUnit": "100 - 100 g pieces",
    "unitPrice": 43.9,
    "unitsInStock": 49,
    "unitsOnOrder": 0,
    "reorderLevel": 30,
    "discontinued": false,
    "name": "Schoggi Schokolade"
  },
  {
    "id": 28,
    "supplierId": 12,
    "categoryId": 7,
    "quantityPerUnit": "25 - 825 g cans",
    "unitPrice": 45.6,
    "unitsInStock": 26,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Rössle Sauerkraut"
  },
  {
    "id": 29,
    "supplierId": 12,
    "categoryId": 6,
    "quantityPerUnit": "50 bags x 30 sausgs.",
    "unitPrice": 123.79,
    "unitsInStock": 0,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Thüringer Rostbratwurst"
  },
  {
    "id": 30,
    "supplierId": 13,
    "categoryId": 8,
    "quantityPerUnit": "10 - 200 g glasses",
    "unitPrice": 25.89,
    "unitsInStock": 10,
    "unitsOnOrder": 0,
    "reorderLevel": 15,
    "discontinued": false,
    "name": "Nord-Ost Matjeshering"
  },
  {
    "id": 31,
    "supplierId": 14,
    "categoryId": 4,
    "quantityPerUnit": "12 - 100 g pkgs",
    "unitPrice": 12.5,
    "unitsInStock": 0,
    "unitsOnOrder": 70,
    "reorderLevel": 20,
    "discontinued": false,
    "name": "Gorgonzola Telino"
  },
  {
    "id": 32,
    "supplierId": 14,
    "categoryId": 4,
    "quantityPerUnit": "24 - 200 g pkgs.",
    "unitPrice": 32,
    "unitsInStock": 9,
    "unitsOnOrder": 40,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Mascarpone Fabioli"
  },
  {
    "id": 33,
    "supplierId": 15,
    "categoryId": 4,
    "quantityPerUnit": "500 g",
    "unitPrice": 2.5,
    "unitsInStock": 112,
    "unitsOnOrder": 0,
    "reorderLevel": 20,
    "discontinued": false,
    "name": "Geitost"
  },
  {
    "id": 34,
    "supplierId": 16,
    "categoryId": 1,
    "quantityPerUnit": "24 - 12 oz bottles",
    "unitPrice": 14,
    "unitsInStock": 111,
    "unitsOnOrder": 0,
    "reorderLevel": 15,
    "discontinued": false,
    "name": "Sasquatch Ale"
  },
  {
    "id": 22,
    "supplierId": 9,
    "categoryId": 5,
    "quantityPerUnit": "24 - 500 g pkgs.",
    "unitPrice": 21,
    "unitsInStock": 104,
    "unitsOnOrder": 0,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Gustaf's Knäckebröd"
  },
  {
    "id": 21,
    "supplierId": 8,
    "categoryId": 3,
    "quantityPerUnit": "24 pkgs. x 4 pieces",
    "unitPrice": 10,
    "unitsInStock": 3,
    "unitsOnOrder": 40,
    "reorderLevel": 5,
    "discontinued": false,
    "name": "Sir Rodney's Scones"
  },
  {
    "id": 35,
    "supplierId": 16,
    "categoryId": 1,
    "quantityPerUnit": "24 - 12 oz bottles",
    "unitPrice": 18,
    "unitsInStock": 20,
    "unitsOnOrder": 0,
    "reorderLevel": 15,
    "discontinued": false,
    "name": "Steeleye Stout"
  },
  {
    "id": 23,
    "supplierId": 9,
    "categoryId": 5,
    "quantityPerUnit": "12 - 250 g pkgs.",
    "unitPrice": 9,
    "unitsInStock": 61,
    "unitsOnOrder": 0,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Tunnbröd"
  },
  {
    "id": 37,
    "supplierId": 17,
    "categoryId": 8,
    "quantityPerUnit": "12 - 500 g pkgs.",
    "unitPrice": 26,
    "unitsInStock": 11,
    "unitsOnOrder": 50,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Gravad lax"
  },
  {
    "id": 40,
    "supplierId": 19,
    "categoryId": 8,
    "quantityPerUnit": "24 - 4 oz tins",
    "unitPrice": 18.4,
    "unitsInStock": 123,
    "unitsOnOrder": 0,
    "reorderLevel": 30,
    "discontinued": false,
    "name": "Boston Crab Meat"
  },
  {
    "id": 38,
    "supplierId": 18,
    "categoryId": 1,
    "quantityPerUnit": "12 - 75 cl bottles",
    "unitPrice": 263.5,
    "unitsInStock": 17,
    "unitsOnOrder": 0,
    "reorderLevel": 15,
    "discontinued": false,
    "name": "Côte de Blaye"
  },
  {
    "id": 36,
    "supplierId": 17,
    "categoryId": 8,
    "quantityPerUnit": "24 - 250 g  jars",
    "unitPrice": 19,
    "unitsInStock": 112,
    "unitsOnOrder": 0,
    "reorderLevel": 20,
    "discontinued": false,
    "name": "Inlagd Sill"
  },
  {
    "id": 41,
    "supplierId": 19,
    "categoryId": 8,
    "quantityPerUnit": "12 - 12 oz cans",
    "unitPrice": 9.65,
    "unitsInStock": 85,
    "unitsOnOrder": 0,
    "reorderLevel": 10,
    "discontinued": false,
    "name": "Jack's New England Clam Chowder"
  },
  {
    "id": 43,
    "supplierId": 20,
    "categoryId": 1,
    "quantityPerUnit": "16 - 500 g tins",
    "unitPrice": 46,
    "unitsInStock": 17,
    "unitsOnOrder": 10,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Ipoh Coffee"
  },
  {
    "id": 42,
    "supplierId": 20,
    "categoryId": 5,
    "quantityPerUnit": "32 - 1 kg pkgs.",
    "unitPrice": 14,
    "unitsInStock": 26,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Singaporean Hokkien Fried Mee"
  },
  {
    "id": 46,
    "supplierId": 21,
    "categoryId": 8,
    "quantityPerUnit": "4 - 450 g glasses",
    "unitPrice": 12,
    "unitsInStock": 95,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Spegesild"
  },
  {
    "id": 47,
    "supplierId": 22,
    "categoryId": 3,
    "quantityPerUnit": "10 - 4 oz boxes",
    "unitPrice": 9.5,
    "unitsInStock": 36,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Zaanse koeken"
  },
  {
    "id": 48,
    "supplierId": 22,
    "categoryId": 3,
    "quantityPerUnit": "10 pkgs.",
    "unitPrice": 12.75,
    "unitsInStock": 15,
    "unitsOnOrder": 70,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Chocolade"
  },
  {
    "id": 49,
    "supplierId": 23,
    "categoryId": 3,
    "quantityPerUnit": "24 - 50 g pkgs.",
    "unitPrice": 20,
    "unitsInStock": 10,
    "unitsOnOrder": 60,
    "reorderLevel": 15,
    "discontinued": false,
    "name": "Maxilaku"
  },
  {
    "id": 50,
    "supplierId": 23,
    "categoryId": 3,
    "quantityPerUnit": "12 - 100 g bars",
    "unitPrice": 16.25,
    "unitsInStock": 65,
    "unitsOnOrder": 0,
    "reorderLevel": 30,
    "discontinued": false,
    "name": "Valkoinen suklaa"
  },
  {
    "id": 51,
    "supplierId": 24,
    "categoryId": 7,
    "quantityPerUnit": "50 - 300 g pkgs.",
    "unitPrice": 53,
    "unitsInStock": 20,
    "unitsOnOrder": 0,
    "reorderLevel": 10,
    "discontinued": false,
    "name": "Manjimup Dried Apples"
  },
  {
    "id": 52,
    "supplierId": 24,
    "categoryId": 5,
    "quantityPerUnit": "16 - 2 kg boxes",
    "unitPrice": 7,
    "unitsInStock": 38,
    "unitsOnOrder": 0,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Filo Mix"
  },
  {
    "id": 53,
    "supplierId": 24,
    "categoryId": 6,
    "quantityPerUnit": "48 pieces",
    "unitPrice": 32.8,
    "unitsInStock": 0,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Perth Pasties"
  },
  {
    "id": 54,
    "supplierId": 25,
    "categoryId": 6,
    "quantityPerUnit": "16 pies",
    "unitPrice": 7.45,
    "unitsInStock": 21,
    "unitsOnOrder": 0,
    "reorderLevel": 10,
    "discontinued": false,
    "name": "Tourtière"
  },
  {
    "id": 55,
    "supplierId": 25,
    "categoryId": 6,
    "quantityPerUnit": "24 boxes x 2 pies",
    "unitPrice": 24,
    "unitsInStock": 115,
    "unitsOnOrder": 0,
    "reorderLevel": 20,
    "discontinued": false,
    "name": "Pâté chinois"
  },
  {
    "id": 56,
    "supplierId": 26,
    "categoryId": 5,
    "quantityPerUnit": "24 - 250 g pkgs.",
    "unitPrice": 38,
    "unitsInStock": 21,
    "unitsOnOrder": 10,
    "reorderLevel": 30,
    "discontinued": false,
    "name": "Gnocchi di nonna Alice"
  },
  {
    "id": 57,
    "supplierId": 26,
    "categoryId": 5,
    "quantityPerUnit": "24 - 250 g pkgs.",
    "unitPrice": 19.5,
    "unitsInStock": 36,
    "unitsOnOrder": 0,
    "reorderLevel": 20,
    "discontinued": false,
    "name": "Ravioli Angelo"
  },
  {
    "id": 44,
    "supplierId": 20,
    "categoryId": 2,
    "quantityPerUnit": "20 - 2 kg bags",
    "unitPrice": 19.45,
    "unitsInStock": 27,
    "unitsOnOrder": 0,
    "reorderLevel": 15,
    "discontinued": false,
    "name": "Gula Malacca"
  },
  {
    "id": 39,
    "supplierId": 18,
    "categoryId": 1,
    "quantityPerUnit": "750 cc per bottle",
    "unitPrice": 18,
    "unitsInStock": 69,
    "unitsOnOrder": 0,
    "reorderLevel": 5,
    "discontinued": false,
    "name": "Chartreuse verte"
  },
  {
    "id": 59,
    "supplierId": 28,
    "categoryId": 4,
    "quantityPerUnit": "5 kg pkg.",
    "unitPrice": 55,
    "unitsInStock": 79,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Raclette Courdavault"
  },
  {
    "id": 60,
    "supplierId": 28,
    "categoryId": 4,
    "quantityPerUnit": "15 - 300 g rounds",
    "unitPrice": 34,
    "unitsInStock": 19,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Camembert Pierrot"
  },
  {
    "id": 45,
    "supplierId": 21,
    "categoryId": 8,
    "quantityPerUnit": "1k pkg.",
    "unitPrice": 9.5,
    "unitsInStock": 5,
    "unitsOnOrder": 70,
    "reorderLevel": 15,
    "discontinued": false,
    "name": "Rogede sild"
  },
  {
    "id": 58,
    "supplierId": 27,
    "categoryId": 8,
    "quantityPerUnit": "24 pieces",
    "unitPrice": 13.25,
    "unitsInStock": 62,
    "unitsOnOrder": 0,
    "reorderLevel": 20,
    "discontinued": false,
    "name": "Escargots de Bourgogne"
  },
  {
    "id": 61,
    "supplierId": 29,
    "categoryId": 2,
    "quantityPerUnit": "24 - 500 ml bottles",
    "unitPrice": 28.5,
    "unitsInStock": 113,
    "unitsOnOrder": 0,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Sirop d'érable"
  },
  {
    "id": 62,
    "supplierId": 29,
    "categoryId": 3,
    "quantityPerUnit": "48 pies",
    "unitPrice": 49.3,
    "unitsInStock": 17,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Tarte au sucre"
  },
  {
    "id": 63,
    "supplierId": 7,
    "categoryId": 2,
    "quantityPerUnit": "15 - 625 g jars",
    "unitPrice": 43.9,
    "unitsInStock": 24,
    "unitsOnOrder": 0,
    "reorderLevel": 5,
    "discontinued": false,
    "name": "Vegie-spread"
  },
  {
    "id": 64,
    "supplierId": 12,
    "categoryId": 5,
    "quantityPerUnit": "20 bags x 4 pieces",
    "unitPrice": 33.25,
    "unitsInStock": 22,
    "unitsOnOrder": 80,
    "reorderLevel": 30,
    "discontinued": false,
    "name": "Wimmers gute Semmelknödel"
  },
  {
    "id": 65,
    "supplierId": 2,
    "categoryId": 2,
    "quantityPerUnit": "32 - 8 oz bottles",
    "unitPrice": 21.05,
    "unitsInStock": 76,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Louisiana Fiery Hot Pepper Sauce"
  },
  {
    "id": 66,
    "supplierId": 2,
    "categoryId": 2,
    "quantityPerUnit": "24 - 8 oz jars",
    "unitPrice": 17,
    "unitsInStock": 4,
    "unitsOnOrder": 100,
    "reorderLevel": 20,
    "discontinued": false,
    "name": "Louisiana Hot Spiced Okra"
  },
  {
    "id": 67,
    "supplierId": 16,
    "categoryId": 1,
    "quantityPerUnit": "24 - 12 oz bottles",
    "unitPrice": 14,
    "unitsInStock": 52,
    "unitsOnOrder": 0,
    "reorderLevel": 10,
    "discontinued": false,
    "name": "Laughing Lumberjack Lager"
  },
  {
    "id": 68,
    "supplierId": 8,
    "categoryId": 3,
    "quantityPerUnit": "10 boxes x 8 pieces",
    "unitPrice": 12.5,
    "unitsInStock": 6,
    "unitsOnOrder": 10,
    "reorderLevel": 15,
    "discontinued": false,
    "name": "Scottish Longbreads"
  },
  {
    "id": 70,
    "supplierId": 7,
    "categoryId": 1,
    "quantityPerUnit": "24 - 355 ml bottles",
    "unitPrice": 15,
    "unitsInStock": 15,
    "unitsOnOrder": 10,
    "reorderLevel": 30,
    "discontinued": false,
    "name": "Outback Lager"
  },
  {
    "id": 71,
    "supplierId": 15,
    "categoryId": 4,
    "quantityPerUnit": "10 - 500 g pkgs.",
    "unitPrice": 21.5,
    "unitsInStock": 26,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Flotemysost"
  },
  {
    "id": 73,
    "supplierId": 17,
    "categoryId": 8,
    "quantityPerUnit": "24 - 150 g jars",
    "unitPrice": 15,
    "unitsInStock": 101,
    "unitsOnOrder": 0,
    "reorderLevel": 5,
    "discontinued": false,
    "name": "Röd Kaviar"
  },
  {
    "id": 74,
    "supplierId": 4,
    "categoryId": 7,
    "quantityPerUnit": "5 kg pkg.",
    "unitPrice": 10,
    "unitsInStock": 4,
    "unitsOnOrder": 20,
    "reorderLevel": 5,
    "discontinued": false,
    "name": "Longlife Tofu"
  },
  {
    "id": 75,
    "supplierId": 12,
    "categoryId": 1,
    "quantityPerUnit": "24 - 0.5 l bottles",
    "unitPrice": 7.75,
    "unitsInStock": 125,
    "unitsOnOrder": 0,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Rhönbräu Klosterbier"
  },
  {
    "id": 76,
    "supplierId": 23,
    "categoryId": 1,
    "quantityPerUnit": "500 ml",
    "unitPrice": 18,
    "unitsInStock": 57,
    "unitsOnOrder": 0,
    "reorderLevel": 20,
    "discontinued": false,
    "name": "Lakkalikööri"
  },
  {
    "id": 69,
    "supplierId": 15,
    "categoryId": 4,
    "quantityPerUnit": "10 kg pkg.",
    "unitPrice": 36,
    "unitsInStock": 26,
    "unitsOnOrder": 0,
    "reorderLevel": 15,
    "discontinued": false,
    "name": "Gudbrandsdalsost"
  },
  {
    "id": 72,
    "supplierId": 14,
    "categoryId": 4,
    "quantityPerUnit": "24 - 200 g pkgs.",
    "unitPrice": 34.8,
    "unitsInStock": 14,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Mozzarella di Giovanni"
  },
  {
    "id": 77,
    "supplierId": 12,
    "categoryId": 2,
    "quantityPerUnit": "12 boxes",
    "unitPrice": 13,
    "unitsInStock": 32,
    "unitsOnOrder": 0,
    "reorderLevel": 15,
    "discontinued": false,
    "name": "Original Frankfurter grüne Soße"
  }
]
//1ci task
// arr.sort((a, b) => b.id - a.id);
// console.log(arr);
//================================================>>>>

// 2ci task :promtdan bir deyer goturun ve eget hemin product ve eger hemin product nameinde olarsa o zaman hemin objecti console-a verin(ilk elementi tapib return etsin)
// let productName = prompt("Zehmet olmasa bir product namei daxil ele :");
// let foundProduct = arr.find(arr => arr.name === productName);
// if (foundProduct) {
//   console.log("Tapilan productumuz :", foundProduct);
// } else {
//   console.log("productumuz tapilmadi.");
// }

//===========================================================================================>>>
// 3 ci task discount deyeri true olanlari filter edib qaytarin
// let discountedProducts = arr.filter(arr => arr.discontinued == true);
// console.log(discountedProducts);

//===================================================================================>>>
//4 - unitprice-i 22 de boyuk olanlari filter edib qaytarin
// let unitPrice1 = arr.filter(arr => arr.unitPrice > 22);
// console.log(unitPrice1);

//============================================================>>>
//5 - spain-den olan mehsullari tap
// let spain = arr.filter(arr => arr.supplier?.address?.country == "Spain");
// console.log(spain);

//===============================================================================>>>
///elavetapsiriqlar math  objecti istifade edin
//1eded-i yuxari metebesine yuvarlaqlasdirin. meselen(4.2->5, 4.8->5)
// let number = 4.2;
// let roundedNumber = Math.ceil(number);
// console.log("Yuvarlaqlasmis eded : " + roundedNumber);

//2eded-i asagi metebesine yuvarlaqlasdirin. meselen(4.2->5, 4.8->5)
//let number = 4.2;
// let roundedNumber = Math.floor(number);
// console.log("Yuvarlaqlasmis eded : " + roundedNumber);

//3eded-i tama metebesine yuvarlaqlasdirin. meselen(4.2->5, 4.8->5)
//let number = 4.2;
// let roundedNumber = Math.round(number);
// console.log("Yuvarlaqlasmis eded : " + roundedNumber);

//4
//let number = 4.2;
// let roundedNumber = Math.round(number);
// let pow = Math.pow(roundedNumber);
// console.log("Yuvarlaqlasmis eded : " + pow);

//5
//let number = 4.2;
// let roundedNumber = Math.round(number);
// let pow = Math.Sqrt(roundedNumber);
// console.log("Yuvarlaqlasmis eded : " + pow);

// //date time
// //1 let
const d = new Date();
// //2
let a = d.getFullYear();
let b = d.getDate();
let f = d.getMonth();
let e = d.getDay();
let l = d.getHours();
let q = d.getMinutes();
let h = d.getSeconds();
console.log(a, b, f, e, l, q, h);
// let arr2 = [
//   {
//     name: "cola",
//     price: 2,
//     isDiscounted: true,
//   },
//   {
//     name: "fanta",
//     price: 1.5,
//     isDiscounted: true,
//   },
//   {
//     name: "sprite",
//     price: 4,
//     isDiscounted: true,
//   },
// ]
// const allAreDiscounted = arr2.every(product => product.isDiscounted === true);
// const atLeastOneIsDiscounted = arr2.some(product => product.isDiscounted === true);
// console.log("tamami endirimlidi ayye", allAreDiscounted);
// console.log("En azindan biri endirimdedi qardas(-__-)", atLeastOneIsDiscounted);

