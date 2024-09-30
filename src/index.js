const arrayNombres=[];
const arrayBilletera=[];
const arrayTransac=[];

function registrarDatos(){

    let nombre = document.getElementById("nombreDeUsuario").value.trim();

    arrayNombres.push(nombre);

    let billetera = document.getElementById("nombreBilletera").value.trim();

    arrayBilletera.push(billetera);

    let transac = document.getElementById("numTransacciones").value.trim();

    arrayTransac.push(transac);

    if (!nombre || !billetera || !transac) {
        alert("Por favor, rellena todos los datos");
        return;
    }

}

function muestraDatos(){

    var datos="";

    for (var x=0; x<arrayNombres.length; x++){
        datos += '<li>'+arrayNombres[x] + " - " +arrayBilletera[x] + " - " + arrayTransac[x] + '</li>';
    }

    const listaDatos = document.getElementById("listaDatos");
    listaDatos.innerHTML = datos;
}

function getMaxTransac(){

    let maxTransac = {} //almacenará los datos con el mayor num de transacciones

    for(let i=0; i<arrayNombres.length; i++){

        let usuarios = arrayNombres[i];
        let billeteras = arrayBilletera[i];
        let transacciones = arrayTransac[i];

        if(!maxTransac[usuarios] || maxTransac[usuarios].transacciones < transacciones)
        {
            maxTransac[usuarios] = {
                billeteras : billeteras,
                transacciones : transacciones
            };
        }
    }

    return maxTransac;

}

function muestraMayores(){
    let muestra = "";
    let maxTransactions = getMaxTransac(); //almacenará los datos obtenidos en el metodo getMaxTransac()

    for(let usuario in maxTransactions){
        let billetera = maxTransactions[usuario].billeteras;
        let transactions = maxTransactions[usuario].transacciones;

        muestra += '<li>'+usuario + " - " +billetera + " - " + transactions + '</li>';
    }

    const listaDatosMax = document.getElementById("listaDatosMax");
    listaDatosMax.innerHTML = muestra;
}