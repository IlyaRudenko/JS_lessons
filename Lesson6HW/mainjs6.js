// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length, )


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world'
// let str1 = 'lorem ipsum'
// let str2 = 'javascript is cool'
// console.log(str.toUpperCase())
// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase())


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD'
// let str1 = 'LOREM IPSUM'
// let str2 = 'JAVASCRIPT IS COOL'
// console.log(str.toLowerCase())
// console.log(str1.toLowerCase())
// console.log(str2.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// let str1 = (str.substring(1, 14))
// console.log(str1)

// let str = ' dirty string   '
// let trim = str.trim()
// console.log(trim)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '))


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let map = arr.map(str => str.toString())
// console.log(map)

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let map = arr.map(function (str) {
// return str.toString()
// })
// console.log(map)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3]
// let sort = function fsortNums(direction, arr) {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b)
//     } else if (direction === 'descending'){
//         arr.sort((a, b) => b - a)
//     }
//     return arr
// }
// console.log(sort('descending', nums))
// console.log(sort('ascending', nums))


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},1
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let courses = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
// let filter = courses.filter(value => value.monthDuration > 5)
// console.log(courses)
// console.log(filter)



// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let svits = [
//     {cardSuit: 'heart', color: 'red'},
//     {cardSuit: 'diamond', color: 'red'},
//     {cardSuit: 'clubs', color: 'black'},
//     {cardSuit: 'spade', color: 'black'},
// ]
// let cardnames = ['6','7','8','9','10','ace','jack','queen','king'];
// let deck = []
// for (let suit of svits) {
//     for (let cardname of cardnames) {
// let card = {
//     cardSuit: suit.cardSuit,
//     value: cardname,
//     color: suit.color
// }
// deck.push(card)
//     }}
// deck.push({cardSuit: null, value: 'joker', color: 'red'})
// deck.push({cardSuit: null, value: 'joker', color: 'black'})
// console.log(deck)

// let filter = deck.filter(value => value.cardSuit === 'spade' && value.value === 'ace')
// console.log(filter)
// let filter = deck.filter(value => value.value === '6')
// console.log(filter)
// let filter = deck.filter(value => value.color === 'red')
// console.log(filter)
// let filter = deck.filter(value => value.cardSuit === 'diamond')
// console.log(filter)
// let filter = deck.filter(value => value.cardSuit === 'clubs' && value.value >= '9' || value.cardSuit === 'clubs' && value.value === '10');
// console.log(filter)



//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let svits = [
//     {cardSuit: 'heart', color: 'red'},
//     {cardSuit: 'diamond', color: 'red'},
//     {cardSuit: 'clubs', color: 'black'},
//     {cardSuit: 'spade', color: 'black'},
// ]
// let cardnames = ['6','7','8','9','10','ace','jack','queen','king'];
// let deck = []
// for (let suit of svits) {
//     for (let cardname of cardnames) {
//         let card = {
//             cardSuit: suit.cardSuit,
//             value: cardname,
//             color: suit.color
//         }
//         deck.push(card)
//     }}
// deck.push({cardSuit: null, value: 'joker', color: 'red'})
// deck.push({cardSuit: null, value: 'joker', color: 'black'})
//
// let reduce = deck.reduce((previousValue, currentValue) => {
//     if (currentValue.cardSuit === 'spade'){
//         previousValue.spades.push(currentValue)
//     } else if (currentValue.cardSuit === 'clubs'){
//         previousValue.clubs.push(currentValue)
//     } else if (currentValue.cardSuit === 'diamond') {
//         previousValue.diamonds.push(currentValue)
//     } else if (currentValue.cardSuit === 'heart') {
//         previousValue.hearts.push(currentValue)
//     }
//     return previousValue
// }, {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// })
// console.log(reduce)