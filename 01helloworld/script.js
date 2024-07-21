// foreach, map, filter, find and indexOf
// Fundamentals of Javascript
// arrays and objects
// functions return
// async js coding

// var arr = [1, 2, 3, 4];
// ============ foreach =================
// arr.forEach(function (val) {
//     console.log(val + " hello");
// });

// ============ map =================
// var arr1 = arr.map(function (val) {
//     return 13;
// })
// console.log(arr1);

// ============ filter =================
// var arr1 = arr.filter(function (val) {
//     if (val > 3) { return true; }
//     else { return false; }
// })

// console.log(arr1);

// ============== find =================
// var arr1 = arr.find(function (val) {
//     if (val == 2) { return true; }
// })

// console.log(arr1);

// ============== indexOf =================
// var arr1 = arr.indexOf(2);
// console.log(arr1);

// ------------------- Objects(key value pairs) ------------------
// var obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// console.log(obj.name);
// console.log(obj.age);
// Object.freeze(obj);
// obj.age = 25;

//--------------------- Functions ------------------------//
// function add(a, b) {
//     return a + b;
// }

// a = 2;
// b = 4;
// console.log(add(a, b));

// ----------------------- Asyn js coding ------------------//
/*
Synchronous  :- line by line code chale isey kahte hai synchronous
Asynchronous :- JO bhi code async nature ka ho usey side satck me 
                bhej do and agle code ko chalao aur agle code ko chalao jo sync 
                nature ka ho , jab bhi sara sync code chal jaaye tab check karo 
                async code complete hua ya nahi agr complete ho to useymain 
                stack me lao aur chla do.

async function abcd() {
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();

    console.log(ans.results[0].name);
}
abcd();
*/