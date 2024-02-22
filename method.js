const biodata = {
  nama: 'risano akbar',
  age: 17,
  sayHelo: function(kamu){
    console.log(`halo ${kamu} apa kabar, nama saya adalah ${this.nama}`);
  },
  sayHi(){
    console.log('hi bro...');
  }
}

biodata.sayHelo('budi')

biodata.sayHi()