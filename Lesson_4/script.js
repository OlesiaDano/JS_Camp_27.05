//Taks 1
const mainArray = [1, 2, 3, 4, 5];

function addOne(a, ...b) {
    for (let i = 0; i < a.length; i++) {
        b.push(a[i]+1);
    }
    return b;
}
console.log(addOne(mainArray));


function show (data) {
    document.getElementById("rez").innerHTML = data;
}

function map(fn, array) {
    return show(fn(array));
}

map(addOne, mainArray);

//Task 2
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
const age = parseInt(prompt("What is your age?"));
let result = age > 18 ? document.getElementById("true_box").innerHTML = "true" : confirm("Allowed by parents?") || age === '' ? document.getElementById("true_box").innerHTML = "allowed by parents" : '';