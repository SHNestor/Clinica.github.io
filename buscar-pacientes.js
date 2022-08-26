var buttonSearch = document.querySelector("#buscar-paciente");

buttonSearch.addEventListener("click",function(){
    //API es un repositorio que ya esta listo 
    // al caul se puede acceder a datos accesibles
    // se pueden accerdes atraves de varios protocolos
    let xhr = new XMLHttpRequest;
    let errorAjax = document.querySelector("#error-ajax");

    let linkIn = "https://alura-es-cursos.github.io/api-pacientes/pacientes.json";
    let linkOp = "https://alura-es-cursos.github.io/api-pacientes/pacientes.json";
    
    if (linkIn == linkOp){
        xhr.open("GET", linkIn);
        //Escucha el el evento load, de cargar
        xhr.addEventListener("load",function(){
                errorAjax.classList.add("invisible");
                let respuesta = xhr.responseText;
                //el json convierte el string en objeto
                let pacientes = JSON.parse(respuesta);
                pacientes.forEach(function(paciente){
                    adicionarPaicenteEnLaTabla(paciente);
                });
        });
    }else{
        console.log("El else funciona");
        errorAjax.classList.remove("invisible");
    }
    xhr.send();
});