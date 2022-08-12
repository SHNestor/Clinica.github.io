var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event){
    //todo esto me permite agregar una clase ya declarada en
    // Css
    event.target.parentNode.classList.add(".fadeOut"); 
    //Tiempo que tarda en ejecutarce la salida
    setTimeout(function(){
        //Me permite eliminar el padre del evento
        event.target.parentNode.remove();
    },500);
});