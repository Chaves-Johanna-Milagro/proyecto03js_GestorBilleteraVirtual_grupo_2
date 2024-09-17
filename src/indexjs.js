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

