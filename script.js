alert("Привет, я JS!");

function gameGuess() {
    var number = prompt("Введи число");
    var guessNumber = 20;
    if (number > guessNumber) {
        alert("Слишком много");
        return gameGuess();
    }
        
    else if(number < guessNumber) {
        alert("Слишком мало");
        return gameGuess();
    }   
    else
        return alert("Ты угадал");
}

gameGuess();

function reminder() {
    alert("Ты здесь слишком долго")
}

setTimeout(reminder, 5000);

function validForm() {
    var name = document.getElementById("name").value;
    console.log(name);
    
    var password = document.getElementById("password").value;
    
    var reg_name = /^[a-zа-яё]+$/i;
    var reg_password = /[0-9a-z]{5,100}/i;
    
    if (reg_name.test(name)==false) {
        alert("Ошибка в ФИО");
    }
    
    if (reg_password.test(password)==false) {
        alert("Ошибка в Пароле");
    }
}

document.querySelector(".button").addEventListener("click", validForm);
