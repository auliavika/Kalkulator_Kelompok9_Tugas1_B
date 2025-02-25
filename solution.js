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

function isPrima(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function modulus(a, b) {
    return a % b;
}

function absolut(n) {
    return Math.abs(n);
}

function maksimum(a, b) {
    return Math.max(a, b);
}

function minimum(a, b) {
    return Math.min(a, b);
}

function bulatkan(n) {
    return Math.round(n);
}


module.exports = {
    tambah,
    kurang,
    kali,
    bagi,
    pangkat,
    faktorial,
    isPrima,
    modulus,
    absolut,
    maksimum,
    minimum,
    bulatkan
};
