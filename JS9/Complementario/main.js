let gatos = ["Yoda", "Chipi", "Timothy", "Gris", "Luli", "Negro", "Pelusa"];

let mostrar = document.getElementById("mostrar")

//Cargar un elemento que ingreso el usuario

mostrar.addEventListener("click", function(){
    let mostar = document.getElementById("gatos").value
    console.log(nombre)
})



let nombres = document.getElementById("nombres")

nombres.addEventListener('click', function() {
    for (pokemon of pokemones) {
        divPokemon.innerHTML += `
            <p> ID: ${pokemon.id} </p>
            <p> Nombre: ${pokemon.nombre} </p>
            <p> Tipo: ${pokemon.tipo} </p>
            <p> Vidas: ${pokemon.vidas} </p>
            <p> Ataque: ${pokemon.ataque} </p><br>
        `
    }
})