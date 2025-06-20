console.log("Hola mundo")  
/*console.log(document)
console.log(document.head)
console.log(document.title)*/

//alternativa si se coloca el scrip en el head no en el body
/*document.addEventListener('DOMContentLoaded', () => {
    console.log(document.getElementById('tituloWeb'))
    console.log(document.getElementById('tituloWeb').textContent)
    console.log(document.getElementById('tituloWeb').innerHTML)
})*/

//Métodos
//getElemntById
/*console.log(document.getElementById("tituloWeb"))
console.log(document.getElementById("tituloWeb").textContent)
console.log(document.getElementById("tituloWeb").innerHTML)*/

//querrySelector, simpre selecciona el primer elemento
/*console.log(document.querySelector("#tituloWeb"))
console.log(document.querySelector(".text-primary"))
console.log(document.querySelector("h1"))
console.log(document.querySelector(".text-danger"))
console.log(document.querySelector(".container .text-danger"))*/

//querrySelectorAll, para saleccionar todos
/*console.log(document.querySelectorAll(".text-danger"))
console.log(document.querySelectorAll(".container .text-danger"))*/

const h1 = document.getElementById("tituloWeb")
/*console.log(h1.className)
console.log(h1.id)
console.log(h1.style)
console.log(h1.tagName)
console.log(h1.textContent)
h1.textContent = "Nuevos texto desde JS.";
h1.style.backgroundColor = "red"
h1.style.color = "white"*/

//Estados
/*const button = document.querySelector(".btn-primary") 
//console.log(button) 
    button.addEventListener("click", () =>{ 
        console.log("me diste click")
        h1.textContent = "Texto desde JS modificado al hacer click en el botón"
        h1.style.color = "red"
    })*/

//Práctica color picker
const inputColor = document.getElementById("inputColor");
const btnSeleccionar = document.getElementById("btnSeleccionar");
const parrafoExa = document.getElementById("parrafoExa");
const cardColor = document.getElementById("cardColor");

console.log(inputColor.value);

btnSeleccionar.addEventListener("click", () =>{
    console.log("me disete click")
    console.log(inputColor.value)
    parrafoExa.textContent = inputColor.value
    cardColor.style.backgroundColor = inputColor.value
    
    //Copiar Exa en porta papeles
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
})

