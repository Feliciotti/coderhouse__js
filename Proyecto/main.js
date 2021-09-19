let btn = document.getElementById('btn')
btn.addEventListener("click", function(){
    alert("No sea pendejo")
})

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
    let cntnt = document.createElement("div");
    cntnt.innerHTML = `
        <p> ${deudor.nombre} su deuda de ${deudor.monto}$ ha sido refinanciada en ${deudor.cuotas}CTAS de ${deudor.valorCTAS().toFixed(2)}$</p>
        `
        document.body.appendChild(cntnt);
}

localStorage.setItem('Deudores', deudores);

const deudoresJSON = JSON.stringify(deudores);
console.log(deudoresJSON);