const sayHelo = (nama, callback)=>{
  const text = `helo..., ${nama}`
  callback(text)
}



const printText = (text)=>{
  console.log(text);
}

sayHelo('risano', printText)

// const sayHelo = ()=>{
//   console.log('helo bro...');
// }

// const sayHi = sayHelo

// sayHi()