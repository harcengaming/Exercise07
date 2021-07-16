// let input
// do {
//     input = prompt("Apa kepanjangan dari HC")
//     console.log(input);
// } while (input != "Hary Cendekiawan")
// alert("Jawaban anda benar!")


// while (true) {
//     input = prompt("Apa kepanjangan dari HC")
//     if (input == "Hary Cendekiawan") break
// }
// alert("Jawaban anda benar!")


// function umurKucing (tahun) {
//     if (tahun == 1) {
//         return 15
//     } else if (tahun == 2) {
//         return 24
//     } else if (tahun > 2) {
//         return (tahun - 2) * 4 + 24
//     }
// }

// let input = prompt("Isi umur kucing")
// console.log(umurKucing(input));


// const buah = ["anggur", "jeruk", "pepaya", "mangga"]
// console.log(buah.length);

// buah.splice(1, 0, "naga")
// // console.log(buah);
// console.log(buah.length);

// console.log(buah[0]);
// console.log(buah[1]);
// console.log(buah[2]);


// for (let i = 0; i < buah.length; i++) {
//   console.log(buah[i]);
// }


// for (i in buah) {
//   console.log(buah[i]);
// }







/////////////////////////////////////////////
const latihan = ["Latihan Sesi 07 soal 1-6"];
console.log(latihan[0]);
//Latihan 07
//No. 01
let pekerjaanIt = [
    'Font End Developer', 'Back End Developer', 
    'Full Stack Developer', 'Database Administrator', 
    'Hardware Engineer', 'System Analyst'
];
console.log(pekerjaanIt);

document.write(pekerjaanIt, "<br />");

pekerjaanIt.forEach((item) => {
  console.log(item);
})


//No. 02
const fullTeam = [
  "Harcen", "Molly", "Maulana", "Sarah", "Yakob", 
  "Roni", "Nobertulus", "Trio", "Sartika", "Edi", 
  "Aditiya", "Aldi", "Rodhiyah", "Shella"
];

let teamA = fullTeam.slice(0, 8)
let teamB = fullTeam.slice(8, 15)

console.log("Team", teamA, teamB);
// ["Harcen", "Molly", "Maulana", "Sarah", "Yakob", "Roni", "Nobertulus", "Trio"]
// ["Sartika", "Edi", "Aditiya", "Aldi", "Rodhiyah", "Shella"]

console.log(teamA.slice(2));
// expected output: Array  ["Maulana", "Sarah", "Yakob", "Roni", "Nobertulus", "Trio"]

teamA.splice(3, 0, "Lazzaro")
console.log(teamA);
// expected output: Array ["Harcen", "Molly", "Maulana", "Lazzaro", "Sarah", "Yakob", 
//                         "Roni", "Nobertulus", "Trio"]

teamB.push("Salma");
console.log(teamB);
// expected output: Array ["Sartika", "Edi", "Aditiya", "Aldi", "Rodhiyah", "Shella", "Salma"]


teamA.forEach((item, index) => {
  console.log(index, item);
})

teamB.forEach((index, item) => {
  console.log(item, index);
})

document.write(teamA, "<br />");

document.write(teamB, "<br />");

//No. 03
let angka = [3, 5, 7, 9, 11]

let angka2 =  angka.map((item) => {
  return item * 5
})

console.log(angka2);

document.write(angka2, "<br />");
 

//N0. 04
const pertama = ['Math', 'English', 'Programming'];
const kedua = ["Geography", "Spanish", "Programming"];

function cekPelajaran(pertama, kedua) {
  return pertama.some(item => kedua.includes(item))
};

cekPelajaran(pertama, kedua);
console.log(cekPelajaran(pertama, kedua));


//No. 05
 
// document.getElementsById('tweet').value

// tweet.push(tweet)

// for(let i = 0; i < tweet.length; i++){
// document.write(tweet[i])
// }

//No. 06
// document.getElementsById('usrnm').value
// document.getElementsById('passwd').value

// array.push(username, password)