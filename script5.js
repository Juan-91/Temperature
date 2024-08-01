
function convertTempRange(){
    let start=Number(prompt("Enter Starting Temperature: "));
    let end=Number(prompt("Enter Ending Temperature: "));
    let temp=prompt("Enter C or F")
    let cel=0;
    let fah=0;
    let celsius="c";
    let fahrenheit="f";

    
    for(let i=start;i<=end;i++){
        let cel=(((i-32)*5)/9);
        let fah=(((i*9)/5)+32);

        if(temp===celsius){      
            document.getElementById("test").innerHTML+=`<p> ${i} C° is ${+fah} F° </p>`;        
        }else if(temp===fahrenheit){      
            document.getElementById("test").innerHTML+=`<p> ${i} F° is ${+cel} C° </p>`;        
        }else{     
            document.getElementById("test").innerHTML=`<p> Try again!</p>`; 
 
        } 
        
    }
}




 /*


 for(let i=start;i<=end;i++){
        cel=(((i-32)*5)/9)
        fah=(((i*9)/5)+32);

        if(temp==celsius){      
        console.log(`C to F is =` +fah);
        } else if(temp==fahrenheit){      
        console.log(`C to F is = ` +cel);
        }else{
        console.log("Yeah right, enter valid Temperature. Try again!")
        }
    }
}


        let cel="c";
        let fah="f";

        let f=(((num*9)/5)+32);
        let c=(((num-32)*5)/9);

        if(temp=cel){
            console.log("C to F")
        }else if(temp=fah){
            console.log("F to C")
        }else{
            console.log("Yeah right,try again!!!");
        }*/