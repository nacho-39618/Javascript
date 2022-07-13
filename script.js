
let numero1
let CantidadDeCuotas
let nombre = prompt("Ingrese nombre")
let apellido =prompt("Ingrese Apellido")
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



class persona{
    constructor(nombre, apellido, numero1, CantidadDeCuotas){
        this.nombre = nombre
        this.apellido = apellido
        this.importe = numero1
        this.CantidadDeCuotas = CantidadDeCuotas
    }
}
const persona1 = new persona ("Ignacio", "Gentile", 1000, 3)
const persona2 = new persona ("Carlos", "Ruben", 18000, 1)
const persona3 = new persona ("Pedro", "Gonzales", 56000, 6)
const persona4 = new persona ("Juan", "Perez", 12000, 3)
const persona5 = new persona (nombre, apellido, numero1, CantidadDeCuotas)

console.log(persona1,persona2,persona3,persona4,persona5)

const personas = [persona1, persona2, persona3, persona4, persona5]

console.log(personas[0].apellido)


