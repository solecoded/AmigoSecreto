// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar arreglo vacío 
let amigo = []


// Función para ir guardando amigo
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
 
        if (!nombreAmigo)
        {
            alert('No has ingresado un nombre');
            return;
        }
        amigo.push(nombreAmigo);
        console.log(amigo);
        inputAmigo.value="";
        inputAmigo.focus();
        agregarAmigoLista();

}



// Agregar amigo a la lista
function agregarAmigoLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
        for (let contador = 0; contador < amigo.length; contador++)
        {
            //console.log(contador);
            let item = document.createElement("li");
            item.textContent = amigo[contador]; 
            listaAmigos.appendChild(item);    
        }

}

// Sortear amigo
function sortearAmigo(){
    if(amigo.length === 0)
    {
        alert('No hay amigos disponibles para sortear');
        return;   
    }

    if(amigo.length <= 2)
        {
            alert('¿No crees que son pocos amigos para sortear? Agrega al menos 3');
            return;   
        }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `De los ${amigo.length} amigos agregados, el amigo sorteado es: <strong><span style= "color:#da537b"> ${amigoSorteado}</span></strong>`;
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}



function reiniciarSorteo()
{
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
       limpiarArreglo();
}

function limpiarArreglo()
{   
    amigo.length = 0;    
    resultado.innerHTML = '<span style="display: flex; align-items: center;"> Lista de amigos limpia <img src="assets/check_circle.png" height="32px" alt="Ícono de chequeo" style="margin-left: 5px;"></span>'
        setTimeout(() => {
            resultado.innerHTML = "";
        }, 2000);     
}


let tecla = document.getElementById("amigo");
tecla.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo(); // Llama a la función si se presiona Enter
    }

    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault(); 
    }
});
