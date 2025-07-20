"use client"

import { usePanduan } from "lib/usePanduan";
import { Key } from "react";
export type DownloadItem = {
  nama: string;
  tahun: string | number;
  nama_file: string;
};

 
const PanduanList = () => {
  const {
    data: galleryItems,
    isLoading,
    isError,
  } = usePanduan();

  if (isLoading) {
    return <p className="text-center">Loading Struktur Panduan...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-danger">
        Gagal memuat Struktur Panduan.
      </p>
    );
  }

  if (!galleryItems || galleryItems.length === 0) {
    return (
      <p className="text-center text-muted">
        Tidak ada data panduan yang tersedia.
      </p>
    );
  }

  // Grouping berdasarkan tahun
    const grouped: Record<string, DownloadItem[]> = galleryItems.reduce(
    (acc: Record<string, DownloadItem[]>, item: DownloadItem) => {
        const tahun = String(item.tahun); // pastikan jadi string
        if (!acc[tahun]) {
        acc[tahun] = [];
        }
        acc[tahun].push(item);
        return acc;
    },
    {} as Record<string, DownloadItem[]>
    );

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <>
      {Object.entries(grouped)
        .sort((a, b) => Number(b[0]) - Number(a[0])) // Urut tahun descending
        .map(([tahun, items]) => (
          <div className="container my-5" key={tahun}>
            <h5 className="fw-bold text-purple">{tahun}</h5>
            <ol className="mt-3 text-dark-blue">
              {items.map((item: { nama: string; nama_file: string; }, index: Key ) => (
                <li key={index}>
                  {item.nama.toUpperCase()} :{" "}
                  <a
                    href={`${apiUrl}/storage/buku_panduan/${item.nama_file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    buka link
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ))}
    </>
  );
};


export default PanduanList
