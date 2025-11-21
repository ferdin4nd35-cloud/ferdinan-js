// function name(nama) {
//   return nama;
// }
// function alamat(rumah) {
//   return rumah;
// }
// function hobi(hob) {
//   return hob;
// }
// function jurusan(jurus) {
//   return jurus;
// }
// function wa(no) {
//   return no;
// }
// function sekolah(seko) {
//   return seko;
// }
// function cita(cit) {
//   return cit;
// }

// function umur(um) {
//   return um;
// }
// document.write(`perkenalkan nama saya ${name("Payad")} umur saya ${umur(
//   15
// )} alamat saya di ${alamat("Bumi")} hobi saya adalah ${hobi(
//   "Apa aja yang penting asik"
// )}
//   saya sedang sekolah di ${sekolah("SMK TI BAZMA")} mengambil jurusan ${jurusan(
//   "SIJA"
// )} cita cita saya menjadi ${cita(
//   "Manusia Purba Premium Battle Pass"
// )} untuk informasi lebih lanjut bisa menghubungi saya di ${wa("0812121212")}
//   terima kasih`);
// document.write(`</br> </br>perkenalkan nama saya ${name(
//   "Payad"
// )}</br> umur saya ${umur(15)} </br>alamat saya di ${alamat(
//   "Bumi"
// )}</br> hobi saya adalah ${hobi("Apa aja yang penting asik")}</br>
//   saya sedang sekolah di ${sekolah(
//     "SMK TI BAZMA"
//   )}</br> mengambil jurusan ${jurusan(
//   "SIJA"
// )}</br> cita cita saya menjadi ${cita(
//   "Manusia Purba Premium Battle Pass"
// )}</br> untuk informasi lebih lanjut bisa menghubungi saya di ${wa(
//   "0812121212"
// )} Terimakasih`);


const siswa = {
  nama: "asep",
  umur: '17',
  alamat: "cirebon",
  hobi: "pa aja",
  sekolah: "smk bazma",
  citacita: 'kawin',
  kontak: '0837734556',
};
console.log(siswa)
document.write("<h3>Introduce</h3>");
document.write(`Halo nama saya ${siswa.nama}. Saya sekolah di ${siswa.sekolah}. umur saya ${siswa.umur}. hobi sya ${siswa.hobi}. cita cita saya ${siswa.citacita}. kontak saya ${siswa.kontak}`);

siswa.instagram = "@perdinunnn"
document.write("<h3>add new propwrty</h3>");
document.write(`nama insta gue ${siswa.instagram}`)

siswa.sekolah = "alazhar"
document.write("<h3>gua ubah</h3>");
document.write(`kola baru gua ${siswa.sekolah}`)

delete siswa.kontak;
document.write("<h3>kontak sesudah di hapus</h3>")
document.write(`gua ganti kontak ${siswa.kontak}`)

document.write("<h3>objek siswa righ now</h3>")
document.write(JSON.stringify(siswa,null,2))
