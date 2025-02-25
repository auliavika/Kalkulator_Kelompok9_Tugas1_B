const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n=== Kalkulator Sederhana ===");
    console.log("1. Penjumlahan");
    console.log("2. Pengurangan");
    console.log("0. Keluar");
}

function askQuestion(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}

async function startCalculator() {
    while (true) {
        showMenu();
        let choice = await askQuestion("Pilih operasi (0-2): ");
        
        if (choice === "0") {
            console.log("Terima kasih telah menggunakan kalkulator!");
            rl.close();
            break;
        }
        console.log("Fitur akan ditambahkan nanti.");
    }
}

startCalculator();
