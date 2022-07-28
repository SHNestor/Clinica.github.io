var bottonAccionar= document.querySelector("#adicionar-paciente");

bottonAccionar.addEventListener("click", function(event)  //Esta es una funcion Anónima//
{
    event.preventDefault();
    let form= document.querySelector("#from-adicionar");
   
    //Variable para capturar datos del objeto paciente.
    var datosPaciente= capturarDatosPaciente(form);

    let tabla= document.querySelector("#tabla-pacientes"); //Se accesa al objeto tabla de la parte HTML//
 
    // en esta parte se creo un elemento en el html, pero no se le ha asignado ningun valor//
    let pacienteTr= document.createElement('tr');
    let nombreTd= document.createElement('td');
    let alturaTd= document.createElement('td');
    let pesoTd= document.createElement('td');
    let gorduraTd= document.createElement('td');
    let imcTd= document.createElement('td');

    //en esta seccion se le asigna el valor que tienen las entradas
    //por medio del textContent
    nombreTd.textContent= datosPaciente.nombre;
    alturaTd.textContent= datosPaciente.altura;
    pesoTd.textContent= datosPaciente.peso;
    gorduraTd.textContent= datosPaciente.gordura;
    imcTd.textContent= datosPaciente.imc;

    //En esta seccion se crean los espacion de html con los valores, heredo valores//
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);

});

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