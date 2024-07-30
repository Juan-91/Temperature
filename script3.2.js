

function conversionCF(){
    let temp=prompt("celsius or fahrenheit?: ");
    var num=prompt("Enter temperature: ");
    let f=(((num*9)/5)+32);
    let c=(((num-32)*5)/9);
    let c1="celsius";
    let f1="fahrenheit";

    if(temp==c1){
        document.getElementById("conversion").innerHTML+=`<p>${num}° Celsius is ${f}° Fahranheit</p>`;
    }else if(temp==f1){
        document.getElementById("conversion").innerHTML+=`<p>${num}° Fahrenheit ${c}° Celius</p>`;
    }
    else{
        document.getElementById("conversion").innerHTML+=`<p>Please check spelling</p>`;
    }
}