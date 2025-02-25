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
    console.log("5. Pangkat");
    console.log("6. Faktorial");
    console.log("7. Cek Bilangan Prima");
    console.log("8. Modulus");
    console.log("9. Nilai Absolut");
    console.log("10. Nilai Maksimum");
    console.log("11. Nilai Minimum");
    console.log("12. Pembulatan");
    console.log("0. Keluar");
}

function askQuestion(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}

async function startCalculator() {
    while (true) {
        showMenu();
        let choice = await askQuestion("Pilih operasi (0-12): ");
        
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
            case "5":
                a = await askQuestion("Masukkan basis: ");
                b = await askQuestion("Masukkan eksponen: ");
                console.log(`Hasil: ${math.pangkat(Number(a), Number(b))}`);
                break;
            case "6":
                a = await askQuestion("Masukkan angka: ");
                console.log(`Hasil: ${math.faktorial(Number(a))}`);
                break;
            case "7":
                a = await askQuestion("Masukkan angka: ");
                console.log(`Hasil: ${math.isPrima(Number(a)) ? "Bilangan Prima" : "Bukan Bilangan Prima"}`);
                break;
            case "8":
                a = await askQuestion("Masukkan angka pertama: ");
                b = await askQuestion("Masukkan angka kedua: ");
                console.log(`Hasil: ${math.modulus(Number(a), Number(b))}`);
                break;
            case "9":
                a = await askQuestion("Masukkan angka: ");
                console.log(`Hasil: ${math.absolut(Number(a))}`);
                break;
            case "10":
                a = await askQuestion("Masukkan angka pertama: ");
                b = await askQuestion("Masukkan angka kedua: ");
                console.log(`Hasil: ${math.maksimum(Number(a), Number(b))}`);
                break;
            case "11":
                a = await askQuestion("Masukkan angka pertama: ");
                b = await askQuestion("Masukkan angka kedua: ");
                console.log(`Hasil: ${math.minimum(Number(a), Number(b))}`);
                break;
            case "12":
                a = await askQuestion("Masukkan angka: ");
                console.log(`Hasil: ${math.bulatkan(Number(a))}`);
                break;
            default:
                console.log("Pilihan tidak valid! Silakan pilih lagi.");
        }
    }
}

startCalculator();
