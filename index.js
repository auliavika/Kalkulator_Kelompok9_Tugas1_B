const readline = require("readline");
const math = require("./solution");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n=== Kalkulator Sederhana ===");
    console.log("1. Penjumlahan");
    console.log("2. Pengurangan");
    console.log("3. Perkalian");
    console.log("4. Pembagian");
    console.log("0. Keluar");
}

function askQuestion(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}

async function startCalculator() {
    while (true) {
        showMenu();
        let choice = await askQuestion("Pilih operasi (0-4): ");
        
        if (choice === "0") {
            console.log("Terima kasih telah menggunakan kalkulator!");
            rl.close();
            break;
        }

        let a, b;
        switch (choice) {
            case "1":
                a = await askQuestion("Masukkan angka pertama: ");
                b = await askQuestion("Masukkan angka kedua: ");
                console.log(`Hasil: ${math.tambah(Number(a), Number(b))}`);
                break;
            case "2":
                a = await askQuestion("Masukkan angka pertama: ");
                b = await askQuestion("Masukkan angka kedua: ");
                console.log(`Hasil: ${math.kurang(Number(a), Number(b))}`);
                break;
            case "3":
                a = await askQuestion("Masukkan angka pertama: ");
                b = await askQuestion("Masukkan angka kedua: ");
                console.log(`Hasil: ${math.kali(Number(a), Number(b))}`);
                break;
            case "4":
                a = await askQuestion("Masukkan angka pertama: ");
                b = await askQuestion("Masukkan angka kedua: ");
                try {
                    console.log(`Hasil: ${math.bagi(Number(a), Number(b))}`);
                } catch (error) {
                    console.log(error.message);
                }
                break;
            default:
                console.log("Pilihan tidak valid! Silakan pilih lagi.");
        }
    }
}

startCalculator();
