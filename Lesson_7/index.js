// Task 1
//  //Modified code
const words = [
    "program",
    "monkey",
    "nice",
    "pancake"
];


const word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
console.log("1:" + answerArray);

[...word].forEach((e, i) => {
    answerArray[i] = "_";
    console.log("2:" + answerArray);
});

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    console.log("3:" + answerArray);
    let guess = prompt("Guess a letter OR press Decline to skip");

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please, enter only 1 letter");
    } else {
        [...word].forEach((e, j) => { 
            if (e === guess) {
                answerArray[j] = guess;;
                console.log("4:" + answerArray);
                remainingLetters--;
            }
        });
    }
};
console.log("5:" + answerArray);
alert(answerArray.join(" "));
alert("Hurrey, guessed word is: " + word);



// Original code
// var words = [
//     "программа",
//     "макака",
//     "прекрасный",
//     "оладушек"
// ];

// var word = words[Math.floor(Math.random() * words.length)];

// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//     console.log("2:" + answerArray.length);
// }
// var remainingLetters = word.length;

// while (remainingLetters > 0) {
//     // Показываем состояние игры
//     alert(answerArray.join(" "));

//     var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");

//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите одиночную букву.");
//     } else {
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }
// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слово " + word);