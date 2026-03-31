// Bikin data palsu (Dummy Data) seolah-olah dapet dari Database
const DUMMY_POSTS = [
  {
    id: 1,
    username: "Budi Santoso",
    category: "Dompet & Tas",
    description:
      "Ditemukan dompet kulit hitam di kantin fakultas teknik. Ada KTM atas nama 'Budi'. Yang merasa kehilangan bisa DM ya!",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Foto+Dompet",
    isReturned: false,
    time: "2 jam yang lalu",
  },
  {
    id: 2,
    username: "Siti Aminah",
    category: "Elektronik",
    description:
      "Tolong, saya kehilangan Flashdisk Sandisk warna merah di Lab Komputer Lantai 2. Isinya file skripsi penting banget 😭",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Foto+Flashdisk",
    isReturned: true,
    time: "5 jam yang lalu",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* Kolom Pencarian */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <input
          type="text"
          placeholder="Cari barang hilang (contoh: Kunci motor, Helm)..."
          className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* List Postingan */}
      {DUMMY_POSTS.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* Header Card (Nama User & Status) */}
          <div className="p-4 flex justify-between items-center border-b border-gray-50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                {post.username.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-sm">{post.username}</p>
                <p className="text-xs text-gray-500">{post.time}</p>
              </div>
            </div>
            {post.isReturned ? (
              <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                ✓ Sudah Dikembalikan
              </span>
            ) : (
              <span className="text-xs font-bold text-red-700 bg-red-100 px-3 py-1 rounded-full">
                ! Belum Ditemukan
              </span>
            )}
          </div>

          {/* Gambar Barang */}
          <img
            src={post.image}
            alt="Barang hilang"
            className="w-full h-64 object-cover"
          />

          {/* Body Card (Kategori, Deskripsi, Tombol DM) */}
          <div className="p-4">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {post.category}
            </span>
            <p className="mt-3 text-gray-800 text-sm leading-relaxed">
              {post.description}
            </p>

            {/* Tombol DM */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="w-full text-center text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 py-2 rounded-lg transition">
                💬 Kirim Pesan (DM)
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
