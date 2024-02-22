// if else


// const nilai = 60

// if(nilai >= 70){
//   console.log('Selamat Anda Lulus');
// }else{
//   console.log('Maaf Anda tidak lulus');
// }

// const nilaiAkhir =10
// let grade = ""

// if(nilaiAkhir >= 90){
//   grade = "A"
// }else if(nilaiAkhir >= 75){
//   grade = "B"
// }else if(nilaiAkhir >= 65){
//   grade = "C"
// }else if(nilaiAkhir >= 50){
//   grade = "D"
// }else{
//   grade = "E"
// }

// console.log(grade);

// switch cas

// const dayNumber = new Date('02-05-2024').getDay()
const dayNumber = 12
let hari = "" 

switch(dayNumber){
  case 0:
    hari = "minggu"
    break;
  case 1:
    hari = "Senin"
    break;
  case 2:
    hari = "Selasa"
    break;
  case 3:
    hari = "Rabu"
    break;
  case 4:
    hari = "Kamis"
    break;
  case 5:
    hari = "Jumat"
    break
  case 6:
    hari = "Sabtu"
    break
  default:
    hari = "Maaf anda salah memasukan nilai di number Hari"
}

// console.log(hari);

// ternari operator

const nilai = 50

const keterang = nilai >=70 ? 'Lulus': 'Tidak Lulus'

// console.log(keterang);

// 

const nilaiA = 80

const nilaiB = "80"

const result = nilaiA === nilaiB
console.log(result);
