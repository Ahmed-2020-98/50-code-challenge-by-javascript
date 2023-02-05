// Create a function that will convert from Celsius to Fahrenheit
//cels = (fahr - 32.0) * 5.0/9.0; //Fahr to cels
//fahr = (cels * 9.0/5.0) + 32.0; //Cels to fahr  

function celsiusToFahr(cels){
    var fahr = (cels * 9.0/5.0) + 32.0;
    return fahr;
}
console.log(celsiusToFahr(1));