// controller.mjs
import users from "./data.mjs";

// Menampilkan semua data dengan map()
const index = () => {
  console.log("=== Daftar Users ===");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

// Menambahkan data baru
const store = (user) => {
  users.push(user);
  console.log(`✅ Data '${user.nama}' berhasil ditambahkan!`);
};

// Menghapus data terakhir
const destroy = () => {
  const removed = users.pop();
  console.log(`❌ Data '${removed.nama}' berhasil dihapus!`);
};

export { index, store, destroy };
