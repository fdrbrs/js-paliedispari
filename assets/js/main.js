//Palidroma:
//Chiedere all’utente di inserire una parola

var parola = prompt("scrivi una parola e ti dirò se è palindroma")

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
        return "non è un palindromo " + stringa + ' != ' + stringaReversata;
    }

}

console.log(PalCheck(parola));

