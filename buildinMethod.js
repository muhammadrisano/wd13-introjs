// sort -> untuk sorting sebuat nilai dalam array
const nilai = [30, 7, 4, 1, 9, 6];
const result = nilai.sort((a, b)=> a-b)
const result2 = nilai.sort((c, d)=> d-c)

// console.log(result2);

// map -> untuk mengolah nilai didalam array untuk melopping

const hobies = ['ngoding', 'gaming', 'reading', 'swimming']

// for(let i = 0; i<biodata.length; i++){
//   console.log(`hobi ke ${i} adalah ${biodata[i]}`);
// }

// hobies.map((hobi, index)=>{
//   console.log(`hobi ke ${index} adalah ${hobi}`);
// })

// hobies.forEach((hobi, index)=>{
//   console.log(`hobi ke ${index} adalah ${hobi}`);
// })


const hasil  = hobies.forEach((item)=>{
  return `${item}x`
})

console.log(hasil);


// split -> untuk memecah string menjadi sebuat array


const kalimat = "saya ingin menjadi programmer"

// const kumpulanKata = kalimat.split(' ')

// const kataReverse = kumpulanKata.reverse()

// join -> untuk menggabungkan nilai array menajdi sebuat string


// console.log(kataReverse);
// const gabungString = kataReverse.join(' ')

// console.log(gabungString);

const hasilOlahKata = kalimat.split(' ').reverse().join(' ')

console.log(hasilOlahKata);