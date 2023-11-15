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
function blockNoneFunc(selector, selectorRemove){
    const element = document.querySelector(selector);
    const elementRemove = document.querySelectorAll(selectorRemove);
    element.addEventListener("click", function(){
            containerGrid.classList.remove("d-none");

            for(let i = 0; i < elementRemove.length; i++){
            elementRemove[i].classList.remove("bg");
        }
    })
}


// Operazioni
const containerGrid = document.querySelector(".container-main");
console.log({ containerGrid });

// Ciclo per creare più elementi, che richiama la funzione(provare a fare una funzione anche di questo).
for (let i = 1; i <= 100; i++) {
    const createElement = createElementFunc("div", "cell", i);
    containerGrid.append(createElement)
}

const addClick = addClickFunc(".cell", "bg")
console.log({ addClick });

const blockNone = blockNoneFunc(".button", ".cell")

