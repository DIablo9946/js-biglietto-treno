var elemento = document.getElementById("mio_id");

// Chiedo all'utente il numero di chilometri da percorrere
var distanzadaper = prompt("Indica i chilometri da percorrere");
console.log(distanzadaper);

// Chiedo l'eta del cliente
var etacliente = prompt("Quanti anni hai?");
console.log(etacliente);

// Il prezzo del percorso
var prezzoper = distanzadaper * 0.21;
console.log(prezzoper);


// Stabilisco lo sconto per minorenni
var scontomin = etacliente <= 18;
console.log(scontomin);


// Stablilisco lo sconto per gli anziani
var scontoanz = etacliente >= 65;
console.log(scontoanz);

// Calcolo il prezzo del blilietto al cliente
if (scontomin){
  risultato = prezzoper * 0.8;
}
else {
  risultato = prezzoper;
}

if (scontoanz) {
  risultato = prezzoper * 0.6;
}
 else {
   risultato = prezzoper;
 }



 // Stampo i risultati


elemento.innerHTML = risultato;
