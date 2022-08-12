var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input",function(){
    console.log(this.value);
    let datosPAcinetes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for(let i = 0; i < datosPAcinetes.length; i++){
            let pacientes = datosPAcinetes[i];
            let tdNombre = pacientes.querySelector(".info-nombre");
            let nombre = tdNombre.textContent;
            // Esto nos permite usar la logica ya hecha 
            //para compara letras, sin importar si son 
            //mayusculas o minusculas
            let expresion = new RegExp(this.value,"i");
    
            if(!expresion.test(nombre)){
                pacientes.classList.add("invisible");
                console.log("Estamos en el if");
            }else{
                console.log("estamos en el else");
                pacientes.classList.remove("invisible");
            }
        }
    }else{
        for(let i = 0; i < datosPAcinetes.length; i++){
            let pacientes = datosPAcinetes[i];
            pacientes.classList.remove("invisible");
        }
    }
});