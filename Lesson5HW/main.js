// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let pram = (a, b)=>a*b
// console.log(pram(2,3))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function PR(r) {
//     const Pi = 3.14
//     return Pi * (r*r)
// }
// console.log(PR(4))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function pc(r, h) {
//     const P = 3.14
//     return 2 * P * r * (h + r)
// }
// console.log(pc(4, 10))

// - створити функцію яка приймає масив та виводить кожен його елемент

function filter(users) {
    let allUsers = []
    for (const user of users){
        allUsers.push(user)
    }
    return allUsers
}
let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
console.log(filter(users))

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

//  function paragraff(par) {
//   return (`<p>${par}</p>`)
// }
//    document.write(paragraff(`lorem ipsum`))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulli(uli){
//     return(`
//     <ul>
//     <li>${uli}</li>
//     <li>${uli}</li>
//     <li>${uli}</li>
// </ul>`)
// }
// let d = ulli(`Lorem ipsum dolor.`)
// document.write(d)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulli(uli,number){
//     document.write(`<ul>`)
//         for (let i = 0; i < number; i++) {
//             document.write(`<li>${uli}</li>`)}
//     document.write(`</ul>`)
// }
// ulli(`Lorem ipsum dolor.`, 10)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1, 'string', true];
// function array(arry){
//     for (const text of arry) {
//              document.write(`<div>${text}</div>`)}
// }
// array(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users = [
//     {id:123, name: 'kolya', age: 29},
//     {id:34, name: 'vasya', age: 31},
//     {id:47, name: 'petya', age: 30},
//     {id:56, name: 'olya', age: 28},
//     {id:98, name: 'max', age: 30},
//     {id:94, name: 'anya', age: 31},
//     {id:436, name: 'oleg', age: 28},
//     {id:9698, name: 'andrey', age: 29},
//     {id:32, name: 'masha', age: 30},
//     {id:2435, name: 'olya', age: 31},
// ]
//   function array(arry) {
//      for (const user of arry) {
//         document.write(`<div> ${user.name} ${user.id} -- ${user.age}</div>`)
//     }}
//     array(users)

// - створити функцію яка повертає найменьше число з масиву

// let arr = [1, 2, 3];
//
// function array(arry) {
//     let min = arry[0]
//     for (const number of arry) {
//         if (number < min) {
//             min = number
//         }
//     }
//     return min
// }
//
// let result = array(arr);
// document.write(result)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1, 2, 3];
//
// function array(sum){
//     let numb = 0
//     for (const result of sum) {
//         numb += result
//     }
//     return numb
// }
// let summa = array(arr)
// document.write(summa)