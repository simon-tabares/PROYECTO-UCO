
let saldo = 0;

function agregarMovimiento() {
    let descripcion = document.getElementById("descripcion").value;
    let monto = Number(document.getElementById("monto").value);
    let tipo = document.getElementById("tipo").value;

    if (descripcion.trim() === "" || monto <= 0 || !Number.isFinite(monto)) {
        alert("Escribe una descripción y un valor válido.");
        return;
    }

    if (tipo === "ingreso") {
    saldo += monto;
    } else {
    if (monto > saldo) {
        alert("No tienes suficiente dinero para este gasto.");
        return;
    }

    saldo -= monto;
    }

    document.getElementById("saldo").textContent =
        "$" + saldo.toLocaleString("es-CO");

    let movimiento = document.createElement("li");

    movimiento.textContent =
        descripcion + " - " +
        (tipo === "ingreso" ? "Ingreso: +" : "Gasto: -") +
        "$" + monto.toLocaleString("es-CO");

    document.getElementById("lista").appendChild(movimiento);

    document.getElementById("descripcion").value = "";
    document.getElementById("monto").value = "";
}
