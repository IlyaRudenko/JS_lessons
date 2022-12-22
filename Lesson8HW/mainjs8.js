// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function Users(id, name, surname , email, phone) {
//    this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let arrUsers = []
// let user1 = new Users(65, 'petro1', 'vasko1', 'rubik@ukr.net', 1234124);
// let user2 = new Users(66, 'petro2', 'vasko2', 'rubik@ukr.net', 2234124);
// let user3 = new Users(67, 'petro3', 'vasko3', 'rubik@ukr.net', 3234124);
// let user4 = new Users(68, 'petro4', 'vasko4', 'rubik@ukr.net', 4234124);
// let user5 = new Users(69, 'petro5', 'vasko5', 'rubik@ukr.net', 5234124);
// let user6 = new Users(60, 'petro6', 'vasko6', 'rubik@ukr.net', 6234124);
// let user7 = new Users(55, 'petro7', 'vasko7', 'rubik@ukr.net', 7234124);
// let user8 = new Users(45, 'petro8', 'vasko8', 'rubik@ukr.net', 8234124);
// let user9 = new Users(35, 'petro9', 'vasko9', 'rubik@ukr.net', 9234124);
// let user0 = new Users(25, 'petro0', 'vasko0', 'rubik@ukr.net', 0234124);
// arrUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user0);
// console.log(arrUsers);
//
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filterUsers = arrUsers.filter(value => value.id %2 === 0);
// console.log(filterUsers)
//
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortUsers = filterUsers.sort((a, b) => a.id - b.id)
// console.log(sortUsers)
//


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arrClient = [];
// let Client1 = new Client(65, 'petro1', 'vasko1', 'rubik@ukr.net', '1234124', ['order1']);
// let Client2 = new Client(66, 'petro2', 'vasko2', 'rubik@ukr.net', '2234124', ['order2','order','order3']);
// let Client3 = new Client(67, 'petro3', 'vasko3', 'rubik@ukr.net', '3234124', ['order3','order']);
// let Client4 = new Client(68, 'petro4', 'vasko4', 'rubik@ukr.net', '4234124', ['order4','order','order5','order3']);
// let Client5 = new Client(69, 'petro5', 'vasko5', 'rubik@ukr.net', '5234124', ['order5','order']);
// let Client6 = new Client(60, 'petro6', 'vasko6', 'rubik@ukr.net', '6234124', ['order6','order']);
// let Client7 = new Client(55, 'petro7', 'vasko7', 'rubik@ukr.net', '7234124', ['order7','order']);
// let Client8 = new Client(45, 'petro8', 'vasko8', 'rubik@ukr.net', '8234124', ['order8','order']);
// let Client9 = new Client(35, 'petro9', 'vasko9', 'rubik@ukr.net', '9234124', ['order9','order']);
// let ClientO = new Client(25, 'petro0', 'vasko0', 'rubik@ukr.net', '0234124', ['order0','order']);
// arrClient.push(Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, ClientO);
// console.log(arrClient);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortClients = arrClient.sort((a, b) => a.order.length - b.order.length)
// console.log(sortClients)


//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car(model, produced, year, maxSpead, engine) {
//     this.model = model;
//     this.produced = produced;
//     this.year = year;
//     this.maxSpead = maxSpead;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpead} km на годину`)
//     }
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function') {
//                 console.log(`${carKey} - ${this[carKey]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpead += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new car('NSX-R', 'Honda', '1995', 270, '3.2')
//
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(38)
// car1.changeYear('2016');
// car1.addDriver('littleJapanese');
// console.log(car1)




//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//  class car {
//     constructor (model, produced, year, maxSpead, engine){
//     this.model = model;
//     this.produced = produced;
//     this.year = year;
//     this.maxSpead = maxSpead;
//     this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpead} km на годину`)
//     }
//     info() {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function') {
//                 console.log(`${carKey} - ${this[carKey]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpead += newSpeed;
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new car('NSX-R', 'Honda', '1995', 270, '3.2')
//
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(38)
// car1.changeYear('2016');
// car1.addDriver('littleJapanese');
// console.log(car1)
//
//




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Popelushka(name, age, foot) {
//     this.name = name;
//     this.age = age;
//     this.foot = foot;
// }
// let PopelushkaO = new Popelushka('Galya0', 89, 41)
// let Popelushka1 = new Popelushka('Galya1', 87, 42)
// let Popelushka2 = new Popelushka('Galya2', 86, 43)
// let Popelushka3 = new Popelushka('Galya3', 85, 44)
// let Popelushka4 = new Popelushka('Galya4', 84, 45)
// let Popelushka5 = new Popelushka('Galya5', 83, 46)
// let Popelushka6 = new Popelushka('Galya6', 82, 47)
// let Popelushka7 = new Popelushka('Galya7', 81, 48)
// let Popelushka8 = new Popelushka('Galya8', 80, 49)
// let Popelushka9 = new Popelushka('Galya9', 98, 40)
//
// let arrPopeluska = [];
// arrPopeluska.push(PopelushkaO, Popelushka1, Popelushka2, Popelushka3, Popelushka4, Popelushka5, Popelushka6, Popelushka7, Popelushka8, Popelushka9);
// console.log(arrPopeluska);
//
//
// class Prinz{
//     constructor(name, age, footSize) {
//         this.name = name;
//             this.age = age;
//             this.footSize = footSize;
//     }
// }
//
// let Prince = new Prinz('Petro', 21, 46)
// console.log(Prince)
//
// const popePrince = (arr, princ) => {
//     for (const item of arr) {
//   if (item.foot === princ.footSize){
//       console.log(`Popelushka is ${item.name}`)
//   }
//     }
// }
// popePrince(arrPopeluska, Prince);
//
// let Find = arrPopeluska.find(value => value.foot === Prince.footSize)
// console.log(Find)
//
