"use strict"

// Funzioni

//Funzione per creare un singolo elemento
function createElementFunc(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);
    return element;
}

//Funzione per stampare in console e aggiunge class
function addClickFunc(selector, className) {
    const element = document.querySelectorAll(selector);

    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function () {
            element[i].classList.add(className)
            console.log(`Ho cliccato ${i + 1}`)
        })
    };
}

// Funzione display None
function blockNoneFunc(selector, selectorRemove) {
    const element = document.querySelector(selector);
    const elementRemove = document.querySelectorAll(selectorRemove);
    element.addEventListener("click", function () {
        containerGrid.classList.remove("d-none");
        for (let i = 0; i < elementRemove.length; i++) {
            elementRemove[i].classList.remove("bg");
        } console.log("Ho premuto play")
    })
}


// Operazioni
const containerGrid = document.querySelector(".container-main");
console.log({ containerGrid });


// Variabili Difficoltà
const levelHard = document.querySelector(".hard")
const levelHardValue = levelHard.value
console.log(levelHardValue)

const levelNormal = document.querySelector(".normal")
const levelNormalValue = levelNormal.value
console.log(levelNormalValue)

const levelEasy = document.querySelector(".easy")
const levelEasyValue = levelEasy.value
console.log(levelEasyValue)

// Ciclo per creare più elementi, che richiama la funzione(provare a fare una funzione anche di questo).
if(levelEasyValue === "hard"){
for (let i = 1; i <= 100; i++) {
    const createElement = createElementFunc("div", "cell", i);
    containerGrid.append(createElement)
}}

const addClick = addClickFunc(".cell", "bg")

const blockNone = blockNoneFunc(".button", ".cell")

