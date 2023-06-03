let arr = [4, 16, 19, 22, 11, 144, 967, 19124]

let even = [] // четные сюда
let odd = [] // нечетные сюда

let evn = arr.filter(val => {
    return val % 2 === 0;
});
console.log(evn);

let od = arr.filter(val => {
    return val % 2 === 1;
});
console.log(od);




//homework 2

let names = ["jafar", "dilik", "emin", "aziz"]

let finded = names.filter(item => item.length = names )

console.log(finded);