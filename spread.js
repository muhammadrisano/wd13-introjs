// umtuk memasukan array ke array alin
const hobiLama = ['gaming', 'joging']

const myHobi = [ 'ngoding', 'reading', ...hobiLama]
// console.log(myHobi);


// untuk menggabungkan 2 array

const makanFavorit = ['bakso', 'pangsit']
const makanTidakSuka = ['indomie', 'nasi goreng']

const result = [...makanFavorit, ...makanTidakSuka]


// const biodata  = {
//   name: 'risano',
//   email: 'risano@gmail.com',
//   age: 17
// }

// console.log(result);

// untuk mengclone atau mencopy array / object

const biodata  = {
  name: 'risano',
  email: 'risano@gmail.com',
  age: 17
}


const newBiodata = {
  name: 'risano akbar',
  isMerried: true,
  city: 'padang'
}

const resultBiodata = {
  ...biodata,
  ...newBiodata
}

console.log(resultBiodata);

// const resultBiodata = {...biodata}
// resultBiodata.name = "risano akbar"
// resultBiodata.age = 20
// console.log(resultBiodata);
// console.log(biodata);


// const newBiodata = {
//   name: 'risano akbar',
//   isMerried: true,
//   city: 'padang'
// }

