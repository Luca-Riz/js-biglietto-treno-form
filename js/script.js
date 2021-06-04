// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


var elabora = document.getElementById('bGenera');

// js ascolta il click del pulsante
elabora.addEventListener("click", function(){
    // prendo e passo il nome
    //prendo
    var nome = document.getElementById("nomeIn").value;
    // console.log(nome);
    //passo
    document.getElementById('nomePass').innerHTML = nome;

    //km
    var km = document.getElementById("kmIn").value;
    var eta = document.getElementById("fasciaEta").value;
    
    // programma già testato - funzionante senzapescare dati da html
      
    var prezzo = km * 0.21;
    var sconto = "Nessuno sconto"
    if (eta < 18) {
        prezzo = prezzo * 0.8;  //sconto 20% under 18
        sconto = 'Sconto minorenni';
    } else if (eta > 65){
        prezzo = prezzo * 0.6;  //sconto 40% over 65
        sconto = 'Sconto Over 65';
    } 
    
    prezzo = prezzo.toFixed(2);
    
    document.getElementById('prezzo').innerHTML += prezzo;
    document.getElementById('sconto').innerHTML = sconto;


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






