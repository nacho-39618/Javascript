
/*let numero1,numero2,operacion
do{
    numero1 = parseFloat(prompt("Ingrese año de nacimiento"))
    numero2 = 2022
    operacion = prompt("Ingrese una operacion(+, - ,*, /)")
} while(isNaN(numero1) || isNaN(numero2))

switch(operacion){
    case "+":
    alert(numero1 + numero2);
    break;

    case "-":
        alert(numero1 - numero2);
        break;

    case "*":
        alert(numero1 * numero2);
        break;

    case "/":
        alert(numero1 / numero2);
        break;
    
    default:
        alert("operacion no valida");
        break;

}
*/

let numero1 = parseFloat(prompt("ingrese año de nacimiento y te diremos tu edad"))
let numero2 = 2022

if(isNaN(numero1))
 alert("Numero no valido")
 
 else{
     alert(numero2 - numero1)
 }
