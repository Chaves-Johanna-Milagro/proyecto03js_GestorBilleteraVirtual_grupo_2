const arrayNombres=[];
const arrayBilletera=[];
const arrayTransac=[];

function resolver(){
    registrarDatos();
    muestraDatos();
}

function registrarDatos(){
    let nombre = document.getElementById("nombreDeUsuario").value.trim();

    arrayNombres.push(nombre);

    let billetera = document.getElementById("nombreBilletera").value.trim();

    arrayBilletera.push(billetera);

    let transac = document.getElementById("numTransacciones").value.trim();

    arrayTransac.push(transac);
}

function muestraDatos(){
    console.log(arrayNombres);
    console.log(arrayBilletera);
    console.log(arrayTransac);
}

