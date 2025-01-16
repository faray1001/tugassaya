
const nilai = 50;
if (nilai <= 100 && nilai >= 92) {
  console.log('Grade: sempurna');
} else if (nilai < 91 && nilai >= 84) {
  console.log('Grade: bagus');
} else if (nilai < 83 && nilai >= 75) {
  console.log('Grade: niat belajar gak sih');
} else if (nilai < 75 && nilai >= 0) {
  console.log('Grade: mati aja udah');
} else {
  console.log('Nilai tidak valid');
}