// let carobj = {
//     brand: 'mercedes',
//     model: 's-class',
//     year: '2019',
//     mileage: 10500,
//     fuelfor1km: 5,
//     fuelcapasity: 15,
//     currentfuel: 10,
//     getfull: function (carobj) {
//         increasefuel = 2;
//         if (this.currentfuel + increasefuel > this.fuelcapasity) {
//             alert("asir");
//         }
//         else {
//             alert(this.currentfuel + increasefuel);
//         }
//     }
//     driveornot: function (carobj) {

//     }


// };

// console.log(aga(carobj));
let carobj = {
    brand: 'mercedes',
    model: 's-class',
    year: '2019',
    mileage: 10500,
    fuelfor1km: 5,
    fuelcapasity: 15,
    currentfuel: 10,
    getfull: function () {
        let increasefuel = 2;
        if (this.currentfuel + increasefuel > this.fuelcapasity) {
            alert("Tank is full.");
        } else {
            alert(this.currentfuel + increasefuel);
        }
    },
    driveornot: function () {
        let drive = 10;
        if (this.currentfuel >= drive) {
            alert("You can drive the car.");
        } else {
            alert("Not enough fuel to drive the car.");
        }
    }
};

// Accessing the object's properties and calling the driveornot method
console.log(carobj.brand); // Output: 'mercedes'
carobj.driveornot(); // Calls the driveornot method and checks if you can drive the car




