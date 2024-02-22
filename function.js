// declaration

const nama = "risano"
// function sayHelo(nickName){
//   console.log(`helo bro ${nickName}, apakabar!`);
// }

// sayHelo(nama)


function penjumlahan(val1, val2){
  const result = val1 + val2
  console.log('function penjumlahan dijalan');
  return result

}





const hasilPenjumlahan = penjumlahan(10, 30)

const hasilPenjulahan2 = penjumlahan(30, 20)

// console.log(hasilPenjumlahan);
// console.log(hasilPenjulahan2);


// expression

const pengurangan = function(val1, val2){
  const result = val1 - val2
  return result
}

const hasilPengurangan = pengurangan(40, 21)

console.log(hasilPengurangan);



const perkalian = (val1, val2)=> val1 * val2


const hasilPerkalian = perkalian(3, 8)
console.log(hasilPerkalian);

// const sayHelo = nickName => `helo bro ${nickName}, apakabar!`
// const text = sayHelo('risano')

// console.log(text);