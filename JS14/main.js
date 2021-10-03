
const URLGET = "http://hp-api.herokuapp.com/api/characters"

$("body").prepend('<button id="btn1">INTENTO DE TAREA 1</button>');

$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h3>${dato.name}</h3>
                                   <p> ${dato.species}</p>
                                   <p> ${dato.gender}</p>
                                   <p> ${dato.house}</p>
                                   <p> ${dato.dateOfBirth}</p>
                                   <p> ${dato.yearOfBirth}</p>
                                   <p> ${dato.ancestry}</p>
                                   <p> ${dato.eyeColour}</p>
                                   <p> ${dato.hairColour}</p>
                                  </div>`);
            }  
          }
    });
});