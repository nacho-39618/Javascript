
let numero1
let CantidadDeCuotas 
const interesen3cuotas = 1.3
const interesen6cuotas = 1.4

numero1 = parseFloat(prompt("Ingrese precio del producto"))

while(isNaN(numero1) === true){
    alert("Ingrese Numero valido");
    numero1 = parseFloat(prompt("Ingrese precio del producto"))

}
CantidadDeCuotas = parseFloat(prompt("Ingrese 1, 3 o 6 cuotas"))

while(CantidadDeCuotas !==  1 && CantidadDeCuotas !== 3 && CantidadDeCuotas !== 6) {
    alert("El mercado no dispone de esa cantidad de cuotas")
    CantidadDeCuotas = parseFloat(prompt("Ingrese 1, 3 o 6 cuotas"))
}

function preciofinal(numero1, CantidadDeCuotas){
    if(CantidadDeCuotas === 1){
        return alert("usted va a pagar una cuota de " + numero1) ;
    }
        else if(CantidadDeCuotas === 3 ) {
            return alert("Usted va a pagar un total de " + numero1 * interesen3cuotas + " en  3 cuotas de " + numero1 * interesen3cuotas / 3 );
        }
        else{
            return alert("Usted va a pagar 6 cuotas de " + numero1 * interesen6cuotas + " en 6 cuotas de " + numero1 * interesen6cuotas / 6);
        }
}
console.log(preciofinal(numero1, CantidadDeCuotas))



