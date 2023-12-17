const newBtn = document.querySelector("#button");
const anotherBtn = document.querySelector("#anotherbutton")
const numBox = document.querySelector(".number");
const anewBtn = document.querySelector("#newbutton");
const anewBox = document.querySelector(".congrats");
let length = 10;


function getRandom(length) {
    let number = Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    return number;
}

function displayNumber() {
    let Number = getRandom(length)

    string = Number.toString();
    let phoneNumber = "";
    for (let i = 0; i < string.length; i++) {
        if (i == 3) {
            phoneNumber += "-";
        }
        if (i == 6) {
            phoneNumber += "-";
        }
        phoneNumber += string[i];
    }
    
    numBox.textContent = phoneNumber;
}

newBtn.addEventListener("click", displayNumber)
anotherBtn.addEventListener("click", displayNumber)

function displayText() {
    let congratsMessage = "Thank you for submitting your phone number !";
    anewBox.textContent = congratsMessage;
}

anewBtn.addEventListener("click", displayText)






