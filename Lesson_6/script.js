//Task 1

let humans = [];

function Human(name, age, sex) {
    //Task 2
    counter = 0;
    //Task 1
    this.name = name;
    this.age = age;
    this.sex = sex;
    //Task 2
    this.humanSex = function (Human) {
        if (Human.sex === "male") {
            document.querySelector(".male").innerHTML += `This is ${Human.name} & he is ${Human.sex}, ${Human.age} years old. <br> <hr>`;
        }else{
            document.querySelector(".female").innerHTML += `This is ${Human.name} & she is ${Human.sex}, ${Human.age} years old. <br> <hr>`;
        }
        document.querySelector(".counter").innerHTML = `Human instance was created ${++counter} times`;
    };
};

//Adding instances to an array
Human.prototype.addHuman = function (arr) {
    arr.push(this);
};

//Adding instances ages to an array
Human.prototype.getAge = function (arr, ...newArr) {
    let i = 0;
    if (typeof arr[i] === 'object') {
        for(let i=0; i<arr.length; i++) {
            newArr.push(arr[i].age);
        }
        console.log(newArr);
        return newArr;
    }
};

//Sorting instances ages in ascending order
Human.prototype.sortAge = function (arr) {
    arr.sort(function compareNumbers(a, b) {
        return a - b;
    });
    document.querySelector(".sort").innerHTML += `Here are humans ages in ascending order: ${arr}<br> <hr>`;
    return arr;
}

//Sorting instances ages in descending order
Human.prototype.sortAgeReverse = function (arr) {
    arr.sort(function compareNumbers(a, b) {
        return b - a;
    });
    document.querySelector(".sort").innerHTML += `Here are humans ages in descending order: ${arr}<br> <hr>`;
    return arr;
}

//Adding instances
let Ivan = new Human("Ivan", 23, "male");
let Oksana = new Human("Oksana", 44, "female");
let Pavlo = new Human("Pavlo", 11, "male");
let Solomia = new Human("Solomia", 55, "female");

//Adding instances to an array method call
Ivan.addHuman(humans);
Oksana.addHuman(humans);
Pavlo.addHuman(humans);
Solomia.addHuman(humans);

//Adding instances ages to an array function call
Ivan.getAge(humans);

//Sorting instances ages in ascending order function call
Oksana.sortAge(Oksana.getAge(humans));

//Sorting instances ages in descending order function call
Oksana.sortAgeReverse(Oksana.getAge(humans));

//Method not iherited by instances, but still Human method
Ivan.humanSex(Ivan);
Oksana.humanSex(Oksana);
Pavlo.humanSex(Pavlo);
Solomia.humanSex(Solomia);
