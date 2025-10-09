class Motor {
constructor(merk, warna) {
this.merk = merk;
this.warna = warna;
}
info() {
return `Motor ini adalah ${this.merk} berwarna ${this.warna}.`;
}
}
const Harley = new Motor("Harley Davidson", "Hijau Army");
console.log(Harley.info());
