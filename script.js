var num1=prompt("enter number");
var num2=prompt("enter number");
var operation = prompt("Menu: 1.Sum-2.Subs-3.Div-4.Mult")

if(operation=="1"){
    var sum=Number(num1)+Number(num2);//Sum
    document.write(num1+ "+" +num2+"=" +sum );
}

if(operation=="2"){
    var subs=Number(num1)-Number(num2);//Subs
    document.write(num1+ "-" +num2+"=" +subs );
}

if(operation=="3"){
    var div=Number(num1)/Number(num2);//Div
    document.write(num1+ "/" +num2+"=" +div );
}

if(operation=="4"){
    var mult=Number(num1)* Number(num2);//Mult
    document.write(num1+ "*" +num2+"=" +mult );
}