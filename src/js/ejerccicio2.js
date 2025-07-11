// cajero.js

const prompt = require('prompt-sync')();

let saldo = 1000;

function cajeroAutomatico() {
    let opcion;

    do {
        console.log("\n========== CAJERO AUTOMÁTICO ==========");
        console.log("1. Consultar saldo");
        console.log("2. Depositar dinero");
        console.log("3. Retirar dinero");
        console.log("4. Salir");
        console.log("========================================");

        opcion = prompt("Selecciona una opción (1-4): ");

        switch (opcion) {
            case "1":
                console.log(`\n💰 Tu saldo actual es: $${saldo.toFixed(2)}`);
                break;

            case "2":
                let deposito = parseFloat(prompt("🟢 Ingresa el monto a depositar: $"));
                if (!isNaN(deposito) && deposito > 0) {
                    saldo += deposito;
                    console.log(`✅ Depósito exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
                } else {
                    console.log("❌ Monto inválido. Intenta de nuevo.");
                }
                break;

            case "3":
                let retiro = parseFloat(prompt("🔴 Ingresa el monto a retirar: $"));
                if (!isNaN(retiro) && retiro > 0) {
                    if (retiro <= saldo) {
                        saldo -= retiro;
                        console.log(`✅ Retiro exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
                    } else {
                        console.log("❌ Fondos insuficientes.");
                    }
                } else {
                    console.log("❌ Monto inválido. Intenta de nuevo.");
                }
                break;

            case "4":
                console.log("👋 Gracias por usar el cajero. ¡Hasta pronto!");
                break;

            default:
                console.log("⚠️ Opción no válida. Por favor selecciona entre 1 y 4.");
        }

    } while (opcion !== "4");
}

cajeroAutomatico();
