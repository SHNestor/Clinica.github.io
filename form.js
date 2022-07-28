var bottonAccionar= document.querySelector("#adicionar-paciente");

bottonAccionar.addEventListener("click", function(event)  //Esta es una funcion Anónima//
{
    event.preventDefault();
    var form= document.querySelector("#from-adicionar");
   
    var nombre= form.nombre.value;
    var peso= form.peso.value;
    var altura= form.altura.value;
    var gordura= form.gordura.value;

    let tabla= document.querySelector("#tabla-pacientes"); //Se accesa al objeto tabla de la parte HTML//
 
    // en esta parte se creo un elemento en el html, pero no se le ha asignado ningun valor//
    let pacienteTr= document.createElement('tr');
    let nombreTd= document.createElement('td');
    let alturaTd= document.createElement('td');
    let pesoTd= document.createElement('td');
    let gorduraTd= document.createElement('td');
    let imcTd= document.createElement('td');

    //en esta seccion se le asigna el valor que tienen las entradas//
    nombreTd.textContent= nombre;
    alturaTd.textContent= altura;
    pesoTd.textContent= peso;
    gorduraTd.textContent= gordura;
    imcTd.textContent= calcularIMC(peso, altura);

    //En esta seccion se crean los espacion de html con los valores, heredo valores//
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);
    console.log(pacienteTr);

});