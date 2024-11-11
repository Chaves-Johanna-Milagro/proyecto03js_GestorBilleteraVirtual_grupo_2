const arrayNombres=[];
const arrayBilletera=[];
const arrayTransac=[];

function registrarDatos(){

    let nombre = document.getElementById("nombreDeUsuario").value.trim();
    let billetera = document.getElementById("nombreBilletera").value.trim();
    let transac = document.getElementById("numTransacciones").value.trim();

    if (!nombre || !transac) {
        alert("Por favor, rellena todos los datos");
        return;
    }

    arrayNombres.push(nombre);

    arrayBilletera.push(billetera);

    arrayTransac.push(transac); 

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

    const maxTransac = {} //almacenará los datos con el mayor num de transacciones

    for(let i=0; i<arrayNombres.length; i++){

        let usuariosCont = arrayNombres[i];
        let billeterasCont = arrayBilletera[i];
        let transaccionesCont = arrayTransac[i];

        if(!maxTransac[usuariosCont] || transaccionesCont > maxTransac[usuariosCont].transacciones) {
            maxTransac[usuariosCont] = {
                usuarios : usuariosCont,
                billeteras : billeterasCont,
                transacciones : transaccionesCont
            };
        }

    }
    return maxTransac;
}



function muestraMayores(){
    let muestra = "";
    let maxTransactions = getMaxTransac(); //almacenará los datos obtenidos en el metodo getMaxTransac()

    for(let usuarioMues in maxTransactions){
        let billeteraMues = maxTransactions[usuarioMues].billeteras;
        let transactionsMues = maxTransactions[usuarioMues].transacciones;

        muestra += '<li>'+usuarioMues + " - " +billeteraMues + " - " + transactionsMues + '</li>';
    }

    const listaDatosMax = document.getElementById("listaDatosMax");
    listaDatosMax.innerHTML = muestra;
}