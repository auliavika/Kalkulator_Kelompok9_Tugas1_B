// solution.js

function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b === 0) {
        return "Pembagian oleh nol tidak diperbolehkan"; // Sesuai dengan tes
    }
    return a / b;
}

function pangkat(a, b) {
    return Math.pow(a, b);
}

function faktorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = {
    tambah,
    kurang,
    kali,
    bagi,
    pangkat,
    faktorial
};
