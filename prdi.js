// function nama(name) {
//     return name;
// }
// function umur(age) {
//     return age; 
// }
// function alamat(address) {
//     return address;
// }
// function hobi(hobby) {
//     return hobby;
// }
// function sekolah(school) {
//     return school;
// }
// function kelas(classs) {
//     return classs;
// }
// document.write(`Perkenalkan nama saya ${nama("Ferdinand")}, umur saya ${umur(16)}, alamat saya di ${alamat("Cirebon")}, hobi saya adalah ${hobi("badminton")}, saya sedang sekolah di ${sekolah("SMK TI BAZMA")}, mengambil kelas ${kelas("X-SIJA")}. Terima kasih`);
// // code by ferdinand

// Membuat array
let fruits = ["apple", "banana", "orange", "mango"];

// Menggunakan properti length
console.log(fruits.length); // 4

// Menggunakan metode push()
fruits.push("grape"); // menambahkan grape ke akhir array
console.log(fruits); // ["apple", "banana", "orange", "mango", "grape"]

// Menggunakan metode pop()
fruits.pop(); // menghapus grape dari akhir array
console.log(fruits); // ["apple", "banana", "orange", "mango"]

// Menggunakan metode unshift()
fruits.unshift("lemon"); // menambahkan lemon ke awal array
console.log(fruits); // ["lemon", "apple", "banana", "orange", "mango"]

// Menggunakan metode shift()
fruits.shift(); // menghapus lemon dari awal array
console.log(fruits); // ["apple", "banana", "orange", "mango"]

// Menggunakan metode splice()
fruits.splice(2, 1, "melon", "cherry"); // menghapus orange dari indeks 2, dan menambahkan melon dan cherry
console.log(fruits); // ["apple", "banana", "melon", "cherry", "mango"]

// Menggunakan metode slice()
let newFruits = fruits.slice(1, 3); // mengambil elemen dari indeks 1 sampai 3 (tidak termasuk 3)
console.log(newFruits); // ["banana", "melon"]

// Menggunakan metode concat()
let moreFruits = fruits.concat(newFruits); // menggabungkan array fruits dan newFruits
console.log(moreFruits); // ["apple", "banana", "melon", "cherry", “mango”, “banana”, “melon”]

// Menggunakan metode join()
let fruitsString = fruits.join(", "); // menggabungkan semua elemen array menjadi sebuah string, dipisahkan dengan koma dan spasi 
console.log(fruitsString); // “apple, banana, melon, cherry, mango”

// Menggunakan metode reverse() 
fruits.reverse(); // membalikkan urutan elemen array 
console.log(fruits); // [“mango”, “cherry”, “melon”, “banana”, “apple”]

// Menggunakan metode sort() 
fruits.sort(); // mengurutkan elemen array sesuai abjad 
console.log(fruits); // [“apple”, “banana”, “cherry”, “mango”, “melon”]

// Menggunakan metode forEach() 
fruits.forEach(function(fruit) { // menjalankan sebuah fungsi untuk setiap elemen array 
console.log("I like " + fruit); // fungsi yang akan menampilkan "I like " diikuti dengan nama elemen 
});

// Menggunakan metode map() 
let fruitsLength = fruits.map(function(fruit) { // menjalankan sebuah fungsi untuk setiap elemen array dan mengembalikan array baru 
return fruit.length; // fungsi yang akan mengembalikan panjang nama elemen 
}); 
console.log(fruitsLength); // [5, 6, 6, 5, 5]

// Menggunakan metode filter() 
let longFruits = fruits.filter(function(fruit) { // menjalankan sebuah fungsi untuk setiap elemen array dan mengembalikan array baru yang hanya berisi elemen yang memenuhi kondisi tertentu 
return fruit.length > 5; // fungsi yang akan mengembalikan true jika panjang nama elemen lebih dari 5 
}); 
console.log(longFruits); // [“banana”, “cherry”, “mango”]

// Menggunakan metode reduce() 
let totalLength = fruits.reduce(function(accumulator, fruit) { // menjalankan sebuah fungsi untuk setiap elemen array dan mengembalikan sebuah nilai tunggal 
return accumulator + fruit.length; // fungsi yang akan mengembalikan jumlah panjang nama elemen 
}, 0); // nilai awal accumulator adalah 0 
console.log(totalLength); // 27