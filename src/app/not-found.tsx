import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '5rem' }}>
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang kamu cari tidak tersedia.</p>
      <Link href="/" style={{ color: '#007bff' }}>Kembali ke Beranda</Link>
    </div>
  )
}
