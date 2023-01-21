class CrearCotizador{
    constructor(tipoDeCambio, importe){
        this.tipoDeCambio = Number(tipoDeCambio);
        this.importe = Number(importe)
    }

    opcionesDeCotizacion(){
        switch (this.tipoDeCambio) {
            case 1: 
                return "Usted ingreso: " + this.importe + " pesos y convertido a Dolar es: " + this.tipoDeCotizacion() + " dolares";
                
            case 2:
                return "Usted ingreso: " + this.importe + " dolares y convertido a Pesos es: " + this.tipoDeCotizacion() + " Pesos";
                
            default:
                return alert ("Opcion incorrecta, por favor ingrese la opcion correcta");         
        }   
    }
    tipoDeCotizacion(){
        let valorDolar = 300;
        if(this.tipoDeCambio == 1){
            // dolar a pesos
            return this.importe * valorDolar;
        }else if(this.tipoDeCambio == 2){
            //pesos a dolar
            return this.importe / valorDolar;
    
        }
    }

}

function mostrarLista(){
    let lista = " ";
    listaDeCotizaciones.forEach(conversor => { console.log(conversor.opcionesDeCotizacion())});
    lista += listaDeCotizaciones + "\n\n"

}

const listaDeCotizaciones = [];
let pregunta = prompt("Desea hacer una cotizacion? si/no");
while (pregunta === "si") {   

    let tipoDeCambio = prompt("Ingrese una opcion \n 1 - Dolar a Pesos \n 2 - Pesos a Dolar ");
    let importe = prompt("Ingrese un valor a convertir");
    let conversor = new CrearCotizador(tipoDeCambio, importe);
    console.log(conversor);
    alert(conversor.opcionesDeCotizacion());
    listaDeCotizaciones.push(conversor);

    pregunta = prompt("Desea otra cotizacion? si/no");
    
}
mostrarLista()
alert("Gracias por visitar nuestro cotizador");