var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "91011" }
];

var cuentaSeleccionada = null;

function seleccionarCuenta() {
    var nombre = document.getElementById("cuenta").value;
    var password = document.getElementById("password").value;
    cuentaSeleccionada = cuentas.find(cuenta => cuenta.nombre === nombre);
    if (cuentaSeleccionada && password === cuentaSeleccionada.password) {
        document.getElementById("login").style.display = "none";
        document.getElementById("opciones").style.display = "block";
        document.getElementById("resultado").innerText = "";
    } else {
        document.getElementById("resultado").innerText = "Password incorrecto. Inténtelo nuevamente.";
    }
}

function mostrarOpciones() {
    document.getElementById("opciones").style.display = "block";
}

function consultarSaldo() {
    document.getElementById("resultado").innerText = "Su saldo actual es: $" + cuentaSeleccionada.saldo;
}

function mostrarIngresarMonto() {
    var monto = prompt("Ingrese el monto a ingresar:");
    if (monto !== null) {
        ingresarMonto(parseFloat(monto));
    }
}

function ingresarMonto(monto) {
    if (cuentaSeleccionada.saldo + monto > 990) {
        document.getElementById("resultado").innerText = "No puede tener más de $990 en la cuenta.";
    } else {
        cuentaSeleccionada.saldo += monto;
        document.getElementById("resultado").innerText = "Monto ingresado: $" + monto + "\nNuevo saldo: $" + cuentaSeleccionada.saldo;
    }
}

function mostrarRetirarMonto() {
    var monto = prompt("Ingrese el monto a retirar:");
    if (monto !== null) {
        retirarMonto(parseFloat(monto));
    }
}

function retirarMonto(monto) {
    if (cuentaSeleccionada.saldo - monto < 10) {
        document.getElementById("resultado").innerText = "No puede tener menos de $10 en la cuenta.";
    } else {
        cuentaSeleccionada.saldo -= monto;
        document.getElementById("resultado").innerText = "Monto retirado: $" + monto + "\nNuevo saldo: $" + cuentaSeleccionada.saldo;
    }
}

function regresarPaginaInicial() {
    cuentaSeleccionada = null;
    document.getElementById("login").style.display = "block";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("resultado").innerText = "";
}