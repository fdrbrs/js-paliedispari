//Palidroma:

//Chiedere all’utente di inserire una parola

var parola = prompt("scrivi una parola e ti dirò se è palindroma");

//Creare una funzione per capire se la parola inserita è palindroma

/**
 * @param {string} stringa - la funzione controlla se la stringa inserita è un palindromo
 * @returns {string} - restituisce un messaggio con il risultato del controllo e le due stringhe
 */

function PalCheck(stringa) {
    var stringaReversata = stringa.split("").reverse().join("");
    if (stringa == stringaReversata){
        return "è un palindromo! " + stringa + ' = ' + stringaReversata;
    } else {
        return "non è un palindromo: " + stringa + ' != ' + stringaReversata;
    }

}

console.log(PalCheck(parola));

/* document.getElementById("pal").innerHTML = PalCheck(parola); */

//Pari e Dispari:

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var sceltaPariDispari = prompt("scegli pari o dispari");
var sceltaNumero = Number(prompt("scegli un numero tra 1 e 5"));

console.log("hai scelto: " + sceltaPariDispari);
console.log("hai scelto il numero: " + sceltaNumero);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

/**
 * 
 * @param {number} min - numero minimo da qui estrarre. incluso
 * @param {number} max - numero massimo da cui estrarre. incluso
 * @returns {number} - restituisce un numero random tra min e max inclusi
 */

function getRandomOnetoFive(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var pcNumber = getRandomOnetoFive(1, 5);

console.log("il bot ha scelto il numero: " + pcNumber);

//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pariODispari(number_1, number_2) {
    var somma = number_1 + number_2;
    if (somma % 2 == 0) {
        return number_1 + ' + ' + number_2 + " = " + somma + " PARI";
    } else {
        return number_1 + ' + ' + number_2 + " = " + somma + " DISPARI";
    }
}

var risultato = pariODispari(sceltaNumero, pcNumber);

console.log(risultato);

//Dichiariamo chi ha vinto.
var sommatoria = sceltaNumero + pcNumber;

if (sommatoria % 2 == 0 && sceltaPariDispari == "pari") {
    console.log("hai vinto");
} else if (sommatoria % 2 !== 0 && sceltaPariDispari == "dispari") {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}

console.log("GAME OVER.");
console.log("refresh page to play again.");