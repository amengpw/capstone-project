"use client";

import { useState } from "react";

export default function Upload() {
  const [preview, setPreview] = useState<string | null>(null);

  // Fungsi untuk memunculkan preview gambar saat file dipilih
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
        Upload Barang
      </h1>

      <form className="flex flex-col gap-5">
        {/* Input Gambar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Foto Barang
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition cursor-pointer relative">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="max-h-64 mx-auto rounded object-cover"
              />
            ) : (
              <div className="py-8 text-gray-500">
                <p>Klik untuk memilih foto (JPG/PNG)</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Pilihan Kategori */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Kategori Barang
          </label>
          <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition">
            <option value="">-- Pilih Kategori --</option>
            <option value="dompet">Dompet & Tas</option>
            <option value="elektronik">
              Elektronik (HP, Laptop, Flashdisk)
            </option>
            <option value="kunci">Kunci (Motor, Mobil, Kos)</option>
            <option value="dokumen">Dokumen (KTM, KTP, Buku)</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>

        {/* Lokasi Ditemukan/Hilang */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lokasi Terakhir/Ditemukan
          </label>
          <input
            type="text"
            placeholder="Contoh: Depan Perpus Pusat / Kantin Teknik"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Deskripsi Tambahan
          </label>
          <textarea
            rows={4}
            placeholder="Jelaskan ciri-ciri barang secara detail..."
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>

        {/* Tombol Submit */}
        <button
          type="button"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition mt-4"
        >
          Posting Barang
        </button>
      </form>
    </div>
  );
}
