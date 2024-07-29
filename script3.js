
function FahrenheitConversion(){
    var c= prompt("Enter Temperature in Celsius");
    const fah=(((c*9) /5)+32);
    document.getElementById("conversion").innerHTML+=`<p> The conversion of ${c}° Celsius is ${fah}° Fahrenheit</p>`;
}