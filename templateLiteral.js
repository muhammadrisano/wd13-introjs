// 

// nilai IPA saya adalah 90 
// nalai IPS saya adalah 80
// rata2 dari kedua nilai 85

const ipa = 90
const ips = 80

// concat
const text = 'nilai IPA saya adaalh '+ ipa + '\nnilai IPS saya dalah '+ips+ '\nrata2 dari kedua nilai '+ ((ipa + ips) /2)
// console.log(text);

// template literal

const text2 = `nilai IPA saya adalah ${ipa}
nilai IPS saya adalah ${ips}
rata2 dari kedua nilai ${(ipa + ips) /2}`
console.log(text2);