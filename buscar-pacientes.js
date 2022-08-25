var buttonSearch = document.querySelector("#buscar-paciente");

buttonSearch.addEventListener("click",function(){
    //API es un repositorio que ya esta listo 
    // al caul se puede acceder a datos accesibles
    // se pueden accerdes atraves de varios protocolos
    console.log("entro al evento");
    let xhr = new XMLHttpRequest;

    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);
    });
    xhr.send();
});