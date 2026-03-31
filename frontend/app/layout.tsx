import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Kampus Lost & Found",
  description: "Platform cari barang hilang di area kampus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        {/* Navbar */}
        <nav className="bg-white shadow-sm p-4 sticky top-0 z-50">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <Link
              href="/"
              className="font-bold text-2xl text-blue-600 tracking-tight"
            >
              Lost<span className="text-gray-800">&Found</span>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/upload"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                + Upload
              </Link>
              <Link
                href="/login"
                className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>

        {/* Konten Halaman akan muncul di dalam main ini */}
        <main className="max-w-3xl mx-auto p-4 mt-2">{children}</main>
      </body>
    </html>
  );
}
