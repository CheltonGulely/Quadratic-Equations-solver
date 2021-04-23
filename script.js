let valorA=document.getElementById("VA");
let valorB=document.getElementById("VB");
let valorC=document.getElementById("VC");
let  res1=document.getElementById("res1")
let  res2=document.getElementById("res2")



function verificar() {

    let A=Number(valorA.value)
    let B=Number(valorB.value)
    let C=Number(valorC.value)

    
    let delta= B**2-(4*(A*C))
   
    let x1=(-(B)+ (Math.sqrt(delta)))               /2*A 
    let x2=(-(B)- (Math.sqrt(delta)))/2*A 
   
     res1.innerHTML=` <br>`
     res1.innerHTML+=` The X1 value is ${x1} <br>`
     res1.innerHTML+=` The X2 value is ${x2} <br>`
     
  }
  

