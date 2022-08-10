var Pacientes= document.querySelectorAll(".paciente");

for(var i=0; i<Pacientes.length; i++)
{
    let Paciente=Pacientes[i];

    var opeso= Paciente.querySelector(".info-peso"); //Se accede al objeto peso, pero sin el contenido//
    var peso= opeso.textContent; // Con esta convinación se accede al contenido del peso//
    var oaltura= Paciente.querySelector(".info-altura");
    var altura= oaltura.textContent;
    var ogordura= Paciente.querySelector(".info-gordura");
    var gordura= ogordura.textContent;
    var oimc= Paciente.querySelector(".info-imc");
    
    var pesoValido= validarPeso(peso);
    var alturaValida= validarAltura(altura);

    if(!pesoValido)
    {
        opeso.textContent="El peso esta mal"; //Se manda al contenido del objeto, la frese entre comillas//
        oimc.textContent="error";
        pesoValido=false;
        Paciente.classList.add("paciente-incorrecto");
    }
    if(!alturaValida)
    {
        oaltura.textContent="La altura esta mal";
        oimc.textContent="error";
        alturaValida=false;
        Paciente.classList.add("paciente-incorrecto");
    }
    if(pesoValido && alturaValida)
    {
        oimc.textContent= calcularIMC(peso, altura);
    }
}

function calcularIMC(peso, altura)
{
    let imc= 0;

    imc= (peso/(altura*altura));

    return imc.toFixed(2);
}

function validarPeso (peso)
{
    if(peso >= 0 && peso < 1000)
    {
        return true;
    }else{
        return false;
    }
}

function validarAltura (altura)
{
    if(altura >= 0 && altura < 3.00)
    {
        return true;       
    }else{
        return false;
    }
}