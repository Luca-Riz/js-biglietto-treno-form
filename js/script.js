// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


var elabora = document.getElementById('bGenera');

// pulsante Genera
elabora.addEventListener("click", function(){
    
    // prende dati da form
    var nome = document.getElementById("nomeIn").value;    
    var km = document.getElementById("kmIn").value;
    var eta = document.getElementById("fasciaEta").value;
    
    // calcolo prezzo      
    var prezzo = km * 0.21;
    var sconto = "Nessuno sconto"
    if (eta < 18) {
        prezzo = prezzo * 0.8;  //sconto 20% under 18
        sconto = 'Sconto minorenni';
    } else if (eta > 65){
        prezzo = prezzo * 0.6;  //sconto 40% over 65
        sconto = 'Sconto Over 65';
    } 
    prezzo = prezzo.toFixed(2); // arrotonda a due cifre decimali il prezzo    
    
    //output
    var x = document.getElementById("show-hide");
        x.style.display = "block"; // mostra biglietto
    document.getElementById('nomePass').innerHTML = nome; //nome
    document.getElementById('prezzo').innerHTML = prezzo + '€'; // prezzo
    document.getElementById('sconto').innerHTML = sconto; // stringa sconto
    document.getElementById('codCp').innerHTML = Math.floor(Math.random()*10000)+90000; //cp random
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*9)+1; //carrozza random
});

// pulsante annulla
var annulla = document.getElementById('bAnnulla');

annulla.addEventListener("click", function(){
    // document.getElementById('biglietto').className = "hidden";

    //nascondi biglietto
    var x = document.getElementById("show-hide");
    x.style.display = "none"; 

    //svuoto tutti i campi    
    document.getElementById('nomeIn').value = "";
    document.getElementById('kmIn').value = "";
    document.getElementById('fasciaEta').value = "";

});
















// // -------------appunti-----------------
// // dentro function
// // HTML PASSO A JS - input x js
// var x = document.getElementById("myText").value;

// // da js a html - output da js
// document.getElementById("demo").innerHTML = x;


// var elabora = document.getElementById('pulsante genera');

// // js ascolta il click del pulsante
// elabora.addEventListener("click", function(){
//     // tutto quello che deve fare quando faccio click

// });






