//Task 2 & 3
function createNewUser(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
}

createNewUser.prototype.getLogin = function () {
    let login = (this.firstName[0] + this.lastName).toLowerCase();
    return login;
};

//Helper for getAge & getPassword functions to avoid code dublication
createNewUser.prototype.ageHelper = function () {
    let birthdayInput = this.birthday;
    let birthdayFormated = birthdayInput.split(".").reverse().join("-");
    let birthDate = new Date(birthdayFormated);
    return birthDate;
};

createNewUser.prototype.getAge = function () {
    let age = Math.floor((new Date() - new Date(this.ageHelper()).getTime()) / 3.15576e+10);
    return age;
};
createNewUser.prototype.getPassword = function () {
    let birthYear = this.ageHelper().getFullYear();
    let password = this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + birthYear;
    return password;
}



const newUser = new createNewUser(
        prompt("Input first name"), 
        prompt("Input last name"),
        prompt("Please enter date.", "dd.mm.yyyy")
        );

console.log(newUser);    
console.log("User login: " + newUser.getLogin());
console.log("User age: " + newUser.getAge());
console.log("User password: " + newUser.getPassword());

//Task 4
const differentTypes = ['hello', 'world', 23, '23', null, false, undefined];

function filterBy(arr, dataType, ...newArr) {
    arr.forEach((element) => {
        if (typeof element !== dataType) {
            newArr.push(element);
        }
    });
    return newArr;
};

console.log(filterBy(differentTypes, 'string'));
console.log(filterBy(differentTypes, 'number'));
console.log(filterBy(differentTypes, 'boolean'));
console.log(filterBy(differentTypes, 'undefined'));
console.log(filterBy(differentTypes, 'null'));// this doesen't works: null is not equal to null
console.log(filterBy(differentTypes, null));// this doesen't works: null is not equal to null


