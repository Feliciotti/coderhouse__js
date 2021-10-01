$("body").prepend('<button id="btn">Toque aquí para no abonar</button>');
$("body").prepend(`<img id="GIF" src="https://64.media.tumblr.com/3f1453fa3346a5244e50604dc88adf6d/tumblr_nfxe3ktqrR1rwl09fo3_400.gifv" alt="No vuelva a hacer eso">
`);

$("#btn").click(() => { 
    $("#GIF").toggle("slow");
    $("#GIF").fadeOut();
});

//Declaramos la url que vamos a usar para el GET
const URLGET = "https://jsonplaceholder.typicode.com/posts"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">GET</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h3>${dato.title}</h3>
                                   <p> ${dato.body}</p>
                                  </div>`);
            }  
          }
    });
});


class Deuda {
    constructor(nombre, monto, cuotas) {
        this.nombre = nombre;
        this.monto = monto;
        this.cuotas = cuotas;
    }

    valorCTAS() {
        
        if(this.cuotas <= 0 || isNaN(this.cuotas)) {
            alert("Ingrese un carácter válido");

        } else if(this.cuotas >=1 && this.cuotas <=3) {
            return(this.monto / this.cuotas);

        } else if(this.cuotas <=4 && this.cuotas >=6) {
            return((this.monto / this.cuotas) * 1.2);

        } else if(this.cuotas <=7 && this.cuotas >=9 ) {
            return((this.monto / this.cuotas) * 1.25);

        } else (this.cuotas <=10 && this.cuotas >=12 )
            return((this.monto / this.cuotas) * 1.30)
        
    }

}

//Almacenamiento de deudas
const deudores = [];
deudores.push(new Deuda(prompt("Ingrese su nombre"), parseInt(prompt("Ingrese su deuda actual")), parseInt(prompt("Ingrese de 1 a 12 cuotas"))));
deudores.push(new Deuda("Matías", 7000, 6));
deudores.push(new Deuda("Anita", 13500, 10));


for (const deudor of deudores){
    $('div').append(`
        <p> ${deudor.nombre} su deuda de ${deudor.monto}$ ha sido refinanciada en ${deudor.cuotas}CTAS de ${deudor.valorCTAS().toFixed(2)}$</p>
        `)
}

localStorage.setItem('Deudores', deudores);

const deudoresJSON = JSON.stringify(deudores);
console.log(deudoresJSON);