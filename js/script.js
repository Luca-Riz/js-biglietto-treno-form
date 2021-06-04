// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// programma già testato - funzionante

var km = prompt('Inserisci il numero di chilometri che vuoi percorrere');
var eta = parseInt(prompt('iserisci la tua età'));

var prezzo = km * 0.21;

if (eta < 18) {
    prezzo = prezzo * 0.8;  //sconto 20% under 18
} else if (eta > 65){
    prezzo = prezzo * 0.6;  //sconto 40% over 65
} 

prezzo = prezzo.toFixed(2);

document.getElementById('km').innerHTML += km;
document.getElementById('eta').innerHTML += eta;
document.getElementById('prezzo').innerHTML += prezzo;

// -------------roba nuova - sarà tutto da passare sopra?

var elabora = document.getElementById('bGenera');

// js ascolta il click del pulsante
elabora.addEventListener("click", function(){
    // tutto quello che deve fare quando faccio click
    // passo il nome
    var nome = document.getElementById("nomeIn").value;
    console.log(nome);
    document.getElementById('nomePass').innerHTML = 'nome';

    // HTML PASSO A JS - input x js
    var x = document.getElementById("myText").value;

    // da js a html - output da js
    document.getElementById("demo").innerHTML = x;

});














// -------------appunti-----------------
// dentro function
// HTML PASSO A JS - input x js
var x = document.getElementById("myText").value;

// da js a html - output da js
document.getElementById("demo").innerHTML = x;


var elabora = document.getElementById('pulsante genera');

// js ascolta il click del pulsante
elabora.addEventListener("click", function(){
    // tutto quello che deve fare quando faccio click

});






