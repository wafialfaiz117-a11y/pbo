let mahasiswa = new Map();
mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("003", "Wafi");
mahasiswa.set("004", "Putra");
mahasiswa.set("002", "prawira");
console.log(mahasiswa.get("004")); // Output: Andi
console.log(mahasiswa.get("002")); // Output: Andi

let mahasiswi = ["Andi", "Budi", "Citra", "Dewi"];
console.log(mahasiswi[0]); // Output: Andi


let angka = new Set([1, 2, 3, 3, 4, 5, 5]);
console.log(angka); // Output: {1, 2, 3, 4, 5}
