const PI = 3.14;
let poluprecnik = prompt("Molima vas unestipe poluprecnik (r): ");
let visina = prompt("Molim vas unesite visinu (H): ");

let zapreminaValjka = parseFloat(poluprecnik)*2*PI*parseFloat(visina);
alert("Zapremina valjka je: "+zapreminaValjka);