var bottonAccionar= document.querySelector("#adicionar-paciente");

bottonAccionar.addEventListener("click", function(event)  //Esta es una funcion Anónima//
{
    event.preventDefault();

    var form= document.querySelector("#from-adicionar");   
    //Variable para capturar datos del objeto paciente.
    var datosPaciente= capturarDatosPaciente(form);

    let errores= validarPaciente(datosPaciente);

    if(errores.length > 0){
        exibirMansajesErrores(errores);
        return;
    }
    adicionarPaicenteEnLaTabla(datosPaciente);
    form.reset();
    let mensajesErrores = document.querySelector("#mensaje-error");
    mensajesErrores.innerHTML = "";

});
function adicionarPaicenteEnLaTabla (paciente){
    let datosTr= contruirTr(paciente);
    //Validar
    let tabla= document.querySelector("#tabla-pacientes"); //Se accesa al objeto tabla de la parte HTML//
    tabla.appendChild(datosTr);
}

function capturarDatosPaciente(form)
//Se uso la funcion para poder accedes a los datos
//desde la funcion anonima de arriba.
{
    var odatosPaciente= {

        //Capturar los datos del formulario por medio del value
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }

    return odatosPaciente;
}

function contruirTr(datosPaciente)
{
    // en esta parte se creo un elemento en el html, pero no se le ha asignado ningun valor//
    let pacienteTr= document.createElement('tr');
    pacienteTr.classList.add("paciente");

    let nombreTd= construirTd(datosPaciente.nombre, "info-nombre");
    let pesoTd= construirTd(datosPaciente.peso, "info-peso");
    let alturaTd= construirTd(datosPaciente.altura, "info-altura");
    let gorduraTd= construirTd(datosPaciente.gordura, "info-gordura");
    let imcTd= construirTd(datosPaciente.imc, "info-imc");


    //En esta seccion se crean los espacion de html con los valores, heredo valores//
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function construirTd(dato, clase)
{
    let td= document.createElement("td");
    td.classList.add(clase);
    //en esta seccion se le asigna el valor que tienen las entradas
    //por medio del textContent
    td.textContent= dato;

    return td;
}

function validarPaciente (paciente){

    let errores = [];

    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    }
    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacia");
    }
    if(paciente.gordura.length == 0){
        errores.push("El %gordura no puede estar vacio");
    }
    if(!validarPeso(paciente.peso)){
        errores.push("El peso ingresado es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura ingresa es incorrecta");
    }

    return errores;
}
function exibirMansajesErrores(errores){
    let ul = document.querySelector("#mensaje-error");
    ul.innerHTML = "";
    
    errores.forEach(function(error){
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    })
}