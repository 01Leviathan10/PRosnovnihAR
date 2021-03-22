let X = parseFloat(prompt("Uneste vrednost X: "));
let Y = parseFloat(prompt("Uneste vrednost Y: "));
let operacija = prompt("Uneste Operaciju: ");

if (operacija == "/" || operacija == "*" || operacija == "+" || operacija == "-"){
    if (operacija == "/") {
        Z = X / Y;
        alert("Reziltat deljenja je: "+ Z);
    }
    else if (operacija == "*") {
        Z = X * Y;
        alert("Rezultat mnozenja je: "+ Z)
    }
    else if (operacija == "+") {
        Z = X + Y;
        alert("Rezultat sabiranja je: "+ Z)
    }
    else if (operacija == "-") {
        Z = X - Y;
        alert("Rezultat oduzimanja je: "+ Z)
    }
}
else{
    alert("Nije unet validan operator ili nije unet broj!")
}