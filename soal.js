let nama = 'risano'
let email = 'risano@gmail.com'

// 2
const biodata = {
  nama: 'risano',
  email: 'risano@mgail.com'
}


// 3
console.log(`Nama Lenkap : ${biodata.nama}`);
// log

// 4

function printEmail (obj){
  console.log('emial sya adala');
}

printEmail(biodata)
// emial saya adala risano@mgail.com


// 5

function looping(num){
  // logic
}

looping(4)

// “Loopingke 0”
// “Loopingke 1”
// “Loopingke 2”
// “Loopingke 3”


// 6
const myHobi = ['ngoding', 'joging']

function printHobbies(listHobi){
  // 
}

printHobbies(myHobi)
// “Hobi ke 1 adalah ngoding”
// “Hobi ke 2 adalah joging



// 11
let storedObjects = {}


const simpanData = (key, value)=>{
  storedObjects[key] = value
}


simpanData('alamat', 'jl')

console.log(storedObjects);