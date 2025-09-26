// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // Tambahkan minimal 2 data baru
  store({
    nama: "User Baru 1",
    umur: 19,
    alamat: "Jl. Baru 1",
    email: "baru1@mail.com",
  });

  store({
    nama: "User Baru 2",
    umur: 30,
    alamat: "Jl. Baru 2",
    email: "baru2@mail.com",
  });

  // Tampilkan semua data
  index();

  // Hapus 1 data terakhir
  destroy();

  // Tampilkan data setelah dihapus
  index();
};

main();
