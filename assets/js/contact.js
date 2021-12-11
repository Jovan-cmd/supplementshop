let trainerArray = ["Choose your trainer" ,"MARKO MARKOVIC", "MARKO MARKOVIC", "MARKO MARKOVIC"];
let selectTrainer = document.getElementById("trainer");

for(let i = 0; i < trainerArray.length; i++){
    var newOption = document.createElement("option");
    newOption.setAttribute("id",`${trainerArray[i]}`);
    newOption.setAttribute("value",`${trainerArray[i]}`);
    newOption.innerHTML = trainerArray[i];
    selectTrainer.appendChild(newOption);
}

let form = document.getElementById("form");

let nameSurname = document.getElementById("name");
let email = document.getElementById("email");
let age = document.getElementById("age");
let trainer= document.getElementById("trainer");

let inputErrors = document.getElementsByClassName("error");
var mistakes;

let regexName = /^[A-Z]{1}[a-z]{2,15}\s[A-Z]{1}[a-z]{2,15}$/;
let regexEmail = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
let regexAge = /^[0-9]{2}$/;

form.addEventListener("submit", (e) => {
    mistakes = 0;
    e.preventDefault();
    checkName(nameSurname, 0, "Your name is invalid, example: \"Name Surname\"");
    checkEmail(email, 1, "Your email is invalid, example: \"something@domain.com\"");
    checkAge(age, 2, "Please input a number of years", "Sorry, you need to be older to get a trainer");
    checkTrainer(trainer, 3, "Please select a trainer.");
    if (mistakes == 0){
        alert("Thank you for ordering yout training plan, we will contact you soon!");
        setTimeout("location.reload(true);",0);
    }
});

form.addEventListener("reset", () => {
    setTimeout("location.reload(true);",0);
});

let checkName = (id, i, message) => {
    if (!regexName.test(id.value)) {
        inputErrors[i].innerHTML = message;
        mistakes++;
    } 
    else {
        inputErrors[i].innerHTML = "";
    }
  };

let checkEmail = (id, i, message) => {
    if (!regexEmail.test(id.value)) {
        inputErrors[i].innerHTML = message;
        mistakes++;
    } 
    else {
        inputErrors[i].innerHTML = "";
    }
};

let checkAge = (id, i, message, message2) => {
    if (!regexAge.test(id.value)) {
        inputErrors[i].innerHTML = message;
        mistakes++;
    } 
    else if(parseInt(id.value) < 16){
        inputErrors[i].innerHTML = message2;
        mistakes++;
    }
    else {
        inputErrors[i].innerHTML = "";
    }
};
let checkTrainer = (id, i, message) => {
    if (id.value == "Choose your trainer") {
        inputErrors[i].innerHTML = message;
        mistakes++;
    }
    else {
        inputErrors[i].innerHTML = "";
    }
};