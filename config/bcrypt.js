const bcrypt = require('bcryptjs');

// Fungsi untuk mengenkripsi kata sandi
const hashPassword =  async (password) => {
  const sali = await  bcrypt.hash(password, 16);
  return sali;
}

// Fungsi untuk membandingkan kata sandi yang dimasukkan dengan kata sandi yang dienkripsi
const comparePassword = async (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
}

// Ekspor fungsi-fungsi agar dapat digunakan di file lain
module.exports = {
  hashPassword,
  comparePassword
}