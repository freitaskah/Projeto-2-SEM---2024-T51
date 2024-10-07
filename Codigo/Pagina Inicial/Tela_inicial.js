var Bolos = document.getElementById("Bolos");
var Variedades = document.getElementById("Variedades");
var Doces = document.getElementById("Doces");
var Kits = document.getElementById("Kits");


function esconderTodos() {
    Bolos.style.display = "none";
    Variedades.style.display = "none";
    Doces.style.display = "none";
    Kits.style.display = "none";
}

esconderTodos();

function liga_display(elemento, estado){
    if(estado == 1){
        elemento.style.display = "none";
        console.log(elemento.id + " Desligado");
    } else if(estado == 0){
        elemento.style.display = "block";
        console.log(elemento.id + " Ligado");
    }
}

function MudaMenu(x){
    esconderTodos(); 
    mensagemInicial.style.display = "none"; 
    
    if(x == "Bolos"){
        liga_display(Bolos, 0);
    } else if(x == "Variedades"){
        liga_display(Variedades, 0);
    } else if(x == "Doces"){
        liga_display(Doces, 0);
    } else if(x == "Kits"){
        liga_display(Kits, 0);
    }
}