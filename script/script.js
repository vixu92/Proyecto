function abrirCerrarmenu(){

    let menu = document.getElementById("menu");
    let botonAbrir = document.getElementById("boton-menu-cerrado");
    let botonCerrar = document.getElementById("boton-menu-abierto")
    if (menu.className != "menu-desplegado"){

        menu.className = "menu-desplegado";
        botonCerrar.style.display = "inline";
        botonAbrir.style.display = "none"; 
    }else{

        menu.className = "menu-cerrado";
        botonCerrar.style.display = "none"; 
        botonAbrir.style.display = "inline";   
    }
}
window.onscroll = function(){botonArriba()};

function botonArriba(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){

        document.getElementById("botonArriba").style.display = "inline";

    }else{

        document.getElementById("botonArriba").style.display = "none";
    }
}
function subir(){

    window.scrollTo(0,0)
}
function mostrarCoche(){

    var coche = document.getElementById("coche");

    coche.classList.toggle("llegar-visible");
    coche.classList.toggle("llegar-no-visible");
    
 /*   if(coche.style.display == "none"){
        alert("Hola desde el if");

        coche.style.display = "inherit";

    }else{

        alert("Hola desde el else");
        
        coche.style.display = "none";
    }*/
}

function mostrarBus(){

    var bus = document.getElementById("bus");
    
    bus.classList.toggle("llegar-visible");
    bus.classList.toggle("llegar-no-visible");
}

function mostrarTren(){

    var tren = document.getElementById("tren");

    tren.classList.toggle("llegar-visible");
    tren.classList.toggle("llegar-no-visible");
}

function mostrarAvion(){

    var avion = document.getElementById("avion");
    
    avion.classList.toggle("llegar-visible");
    avion.classList.toggle("llegar-no-visible");
}