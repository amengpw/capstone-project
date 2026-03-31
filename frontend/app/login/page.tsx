"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Selamat Datang</h1>
        <p className="text-gray-500 text-sm mt-2">
          Login untuk mulai mencari atau melaporkan barang hilang
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Masukkan username kamu"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <button
          type="button"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition mt-2"
        >
          Masuk
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Belum punya akun?{" "}
        <Link href="#" className="text-blue-600 font-bold hover:underline">
          Daftar sekarang
        </Link>
      </div>
    </div>
  );
}
