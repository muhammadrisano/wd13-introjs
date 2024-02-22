// descruturing untuk object

const kota = 'pekanbaru'

const biodata = {
  name: ' risano',
  email: 'risano@gmail.com',
  isMerried: true,
  alamat: {
    namaJalan: 'jl. kemana saja no 12, padang',
    rt: '001',
    rw: '002',
    kota: 'padang'
  }
}

const {nama, email, isMerried} = biodata

const {namaJalan, kota:city} = biodata.alamat


// console.log(nama);
// console.log(email);
// console.log(isMerried);
// console.log(city);

// descruturing untuk array

const rgb = [130, 20, 10]

const [merah, kuning, biru] = rgb

console.log(biru);