// 1. Напишите приложение, которое будет проверять правильность введения данных:
// Серия и номер паспорта, Номер телефона, Идентификационный код
function isPassport() {
    let obj = {
        DOMInput: document.querySelector("#passport"),
        result: document.querySelector(".resultPass"),
        regPassport: /([A-Z]{2}\d{6})|\d{9}/i
    };

    if(obj.regPassport.test(obj.DOMInput.value)) {
        obj.result.innerHTML = `Паспорт ${obj.DOMInput.value.toUpperCase()}: верифицирован.`;
    } else {
        obj.result.innerHTML = `Паспорт ${obj.DOMInput.value}: не верифицирован.`;
    }
}

function telNumb() {
    let obj = {
        DOMInput: document.querySelector("#telNumber"),
        result: document.querySelector(".resultTelNumb"),
        regTelNumb: /(\+380)\d{9}/g
    };

    if(obj.regTelNumb.test(obj.DOMInput.value)) {
        obj.result.innerHTML = `Телефон ${obj.DOMInput.value}: верифицирован.`;
    } else {
        obj.result.innerHTML = `Телефон ${obj.DOMInput.value}: не верифицирован.`;
    }
}

function isInn() {
    let obj = {
        DOMInput: document.querySelector("#inn"),
        result: document.querySelector(".resultInn"),
        regINN: /\d{10}/
    };

    if(obj.regINN.test(obj.DOMInput.value)) {
        obj.result.innerHTML = `ИНН ${obj.DOMInput.value}: верифицирован.`;
    } else {
        obj.result.innerHTML = `ИНН ${obj.DOMInput.value}: не верифицирован.`;
    }
}

/*
2. Напишите приложение, которое будет принимать строку произвольной длины и символ, 
который будет заменять все гласные буквы в этой строке. Выведите пользователю смешную 
строку дабы порадовать его и его детей.
*/
function isTale(){
    let obj = {
        DOMArea: document.querySelector("#userText"),
        userSymbol: document.querySelector("#userSymbol"),
        result: document.querySelector(".result2"),
        regFunnyText: /[ауоыиэяюёе]/gi,
        regUpRus: /[A-ЯЁ]/
    };

    if(obj.userSymbol.value.length == 1) {
        obj.result.innerHTML = obj.DOMArea.value.replace(obj.regFunnyText, obj.userSymbol.value);
    } else if(obj.userSymbol.value.length > 1 && obj.regUpRus.test(obj.userSymbol.value[0])) {
        obj.result.innerHTML = obj.DOMArea.value.replace(obj.regFunnyText, obj.userSymbol.value[0]);
    } else {
        obj.result.innerHTML = obj.DOMArea.value.replace(obj.regFunnyText, " ");
    }
}

/*
3. Входные данные: Строка.
Выходные данные: Число - Количество слов длиной 2 и больше букв
*/
function countWords() {
    let obj = {
        DOMArea: document.querySelector("#allText"),
        result: document.querySelector(".resultCountWords")
    };

    return obj.result.innerHTML = obj.DOMArea.value.match(/[А-Яа-яЁё]{2,}/g).length; //4. О э я, э! - не проходит проверку. Ошибка в Задаче. length не может прочитать null. Либо переписать всю Задачу.
}

let btnPassport = document.querySelector("#btnPassport"),
    btnTelNumber = document.querySelector("#btnTelNumber"),
    btnINN = document.querySelector("#btnINN"),
    btnFunnyText = document.querySelector("#btnFunnyText"),
    btnCountWords = document.querySelector("#btnCountWords");

btnPassport.addEventListener("click", isPassport);
btnTelNumber.addEventListener("click", telNumb);
btnINN.addEventListener("click", isInn);
btnFunnyText.addEventListener("click", isTale);
btnCountWords.addEventListener("click", countWords);