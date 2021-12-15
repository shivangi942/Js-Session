//querySelector

//class :- " . "
//id :- " # "
//innerText

//query :- ?
//key :- name = text

let btnTranslate = document.querySelector("#btnTranslate");
let inputTxt = document.querySelector("#inputtxt");
let outputTxt = document.querySelector("#outputTxt");

let serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(userInput){
    return serverURL + "?" + "text=" + userInput;
}

//fetch
//Arrow function

function errorHandler(err){
    alert("Something's wrong at the moment. Please try later!")

}

function clickEventHandler(){

    let x = inputTxt.value;

    fetch(getTranslationURL(x))
    .then(response => response.json())
    .then(json => {
        outputTxt.innerText = json.contents.translated;
    })
    .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickEventHandler);

